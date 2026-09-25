// Fachada no hero. Desktop: <video> com aquecimento, scrub pelo scroll e recuperacao quando
// o navegador descarta o video ou solta o decodificador. Celular (<=900px): sequencia de
// quadros num <canvas> (hero-frames.js), porque o seek do Safari no iPhone nao acompanha.
import { createHeroFrames } from './hero-frames.js';

// Os arquivos em /images ficam em cache por 1 dia (vercel.json). Ao trocar o video ou o
// poster mantendo o mesmo nome, suba MEDIA_V (e o ?v= dos preloads em index.html) para
// que ninguem fique vendo a versao antiga.
const MEDIA_V='3';
const stageQuery=matchMedia('(max-width:900px)'),stageVariant=()=>stageQuery.matches?'9x16':'16x9';
const videoUrl=v=>`/images/fachada-entrada-${v}.mp4?v=${MEDIA_V}`,posterUrl=v=>`/images/fachada-poster-${v}.webp?v=${MEDIA_V}`;
const FRAME_COUNT=175,frameUrl=i=>`/images/fachada-frames/${String(i+1).padStart(3,'0')}.webp?v=${MEDIA_V}`;

let updateThresholdRef=null,primeVideoRef=null,applyStageRef=null,lastVideoPaint=0,pausedPaintSeen=false,seeksSincePaint=0;
let thresholdEl=null,thresholdVideo=null,framesCanvas=null,heroFrames=null,framesActive=false;
// para o painel de diagnostico (?diag=1)
export const heroVideoDebug={get video(){return thresholdVideo},get lastPaint(){return lastVideoPaint},get frames(){return framesActive?heroFrames?.stats:null}};

// Retorna {el, update} para o loop de scroll, ou null com reduced motion (so o poster).
export const initHeroVideo=reduced=>{
 thresholdEl=document.querySelector('.threshold');thresholdVideo=document.querySelector('video.threshold-video');framesCanvas=document.querySelector('.threshold-frames');
 const thresholdCopyEl=document.querySelector('.threshold .hero-copy'),thresholdVeilEl=document.querySelector('.threshold-veil'),thresholdStampEl=document.querySelector('.threshold .stamp'),thresholdExitEl=document.querySelector('.threshold-exit');
 if(thresholdVideo){
  thresholdVideo.poster=posterUrl(stageVariant());
  if(!reduced){
   thresholdVideo.muted=true;thresholdVideo.playsInline=true;
   // Aquecer o video tem que ser teimoso: o Chrome do Android corta preload em rede movel
   // ou economia de dados, e se a duracao nunca fica conhecida o scrub nunca comeca — o
   // que se ve e so o poster recebendo o zoom. Um play/pause mudo tambem e o que faz o
   // decodificador entregar quadro no seek (iOS e alguns Androids).
   let gestureHook=null;
   const primeVideo=()=>{
    thresholdVideo.preload='auto';
    // load() so quando nada esta baixando: chamar com o metadata ainda a caminho cancela e
    // recomeca o download do zero (em rede lenta o vigia fazia isso a cada 1,5 s).
    if(thresholdVideo.readyState===0&&thresholdVideo.networkState!==HTMLMediaElement.NETWORK_LOADING)thresholdVideo.load();
    const started=thresholdVideo.play();
    // depois do pause, volta o video para o quadro do scroll (o play pode ter avancado)
    if(started&&started.then)started.then(()=>{thresholdVideo.pause();updateThresholdRef?.()}).catch(err=>{
     // so bloqueio de autoplay (economia de bateria, ajuste do usuario) espera um toque;
     // AbortError e so um play interrompido por load()/pause(), nao precisa de nada
     if(err?.name!=='NotAllowedError'||gestureHook)return;
     const retry=()=>{gestureHook=null;removeEventListener('touchstart',retry);removeEventListener('pointerdown',retry);primeVideo()};
     gestureHook=retry;
     addEventListener('touchstart',retry,{passive:true,once:true});addEventListener('pointerdown',retry,{once:true});
    });
   };
   primeVideoRef=primeVideo;
   // Aquecimento do video: so com o desktop (16:9) ativo, uma vez. Trocas de formato
   // depois disso (girar o tablet) passam por applyStage.
   let videoWarmed=false;
   const warmVideo=()=>{
    if(videoWarmed)return;videoWarmed=true;
    const idlePrime=()=>{if(!framesActive)primeVideo()};
    'requestIdleCallback' in window?requestIdleCallback(idlePrime,{timeout:2000}):setTimeout(idlePrime,700);
    // o primeiro gesto tambem aquece, caso o idle callback tenha pegado a rede cortada
    const firstGesture=()=>{removeEventListener('touchstart',firstGesture);removeEventListener('pointerdown',firstGesture);if(!framesActive&&(thresholdVideo.readyState<2||!lastVideoPaint))primeVideo()};
    addEventListener('touchstart',firstGesture,{passive:true,once:true});addEventListener('pointerdown',firstGesture,{once:true});
    // insiste enquanto o hero estiver na tela e nao houver nenhum quadro decodificado
    let tries=0;
    const watchdog=setInterval(()=>{
     if(framesActive||thresholdVideo.readyState>=2||++tries>10){clearInterval(watchdog);return}
     const box=thresholdEl?.getBoundingClientRect();
     if(box&&box.bottom>0&&box.top<innerHeight)primeVideo();
    },1500);
    // 'requestVideoFrameCallback' avisa a cada quadro realmente pintado: e assim que da
    // para notar que os seeks terminam mas a tela continua parada (decodificador solto).
    if('requestVideoFrameCallback' in HTMLVideoElement.prototype){
     const onPaint=()=>{lastVideoPaint=performance.now();seeksSincePaint=0;if(thresholdVideo.paused)pausedPaintSeen=true;thresholdVideo.requestVideoFrameCallback(onPaint)};
     thresholdVideo.requestVideoFrameCallback(onPaint);
    }
   };
   // Celular: canvas com a sequencia de quadros e o <video> sem src (nao baixa nada).
   // Desktop: o inverso. Girar o tablet atravessando 900px troca um pelo outro.
   let framesQueued=false;
   const applyStage=()=>{
    thresholdVideo.poster=posterUrl(stageVariant());
    const useFrames=!!framesCanvas&&stageQuery.matches;
    framesActive=useFrames;
    if(framesCanvas)framesCanvas.hidden=!useFrames;
    thresholdVideo.hidden=useFrames;
    if(useFrames){
     if(thresholdVideo.getAttribute('src')){thresholdVideo.pause();thresholdVideo.removeAttribute('src');thresholdVideo.load()}
     // o poster fica de fundo ate o primeiro quadro chegar (mesmo recorte: cover, centro)
     framesCanvas.style.backgroundImage=`url("${posterUrl('9x16')}")`;
     heroFrames??=createHeroFrames(framesCanvas,{count:FRAME_COUNT,url:frameUrl});
     // baixa quando o navegador folgar, ou ja no primeiro toque/scroll
     if(!framesQueued){
      framesQueued=true;
      const go=()=>heroFrames.start();
      'requestIdleCallback' in window?requestIdleCallback(go,{timeout:1200}):setTimeout(go,500);
      addEventListener('touchstart',go,{passive:true,once:true});addEventListener('scroll',go,{passive:true,once:true});
     }
    }else{
     const src=videoUrl('16x9');
     if(thresholdVideo.getAttribute('src')!==src){thresholdVideo.src=src;thresholdVideo.load();lastVideoPaint=0;pausedPaintSeen=false;if(videoWarmed)primeVideo()}
     warmVideo();
    }
    updateThresholdRef?.(null,true);
   };
   applyStageRef=applyStage;
   stageQuery.addEventListener('change',applyStage);
  }else stageQuery.addEventListener('change',()=>{thresholdVideo.poster=posterUrl(stageVariant())});
 }
 if(reduced)return null;
 // Atribuir currentTime a cada evento de scroll empilha seeks que se atropelam e
 // engasgam o decoder. Aqui so existe um seek em voo por vez: o alvo mais recente
 // fica guardado e e perseguido assim que o anterior termina. Sem fila, sem atraso
 // artificial, e sem depender da cadencia de rAF (que o iOS estrangula no scroll).
 let seekTarget=0,seekBusy=false,seekGuard=0,seekStartedAt=0;
 // Interpolacao RIFE do master 1080p, servida a 60 fps em resolucao cheia no desktop
 // (antes era reduzida para 1440x810 a metade do bitrate), keyframe a cada 4 quadros
 // para o seek continuar barato.
 const scrubFrameRate=60,scrubFrameStep=1/scrubFrameRate;
 const flushSeek=()=>{
  if(seekBusy||!thresholdVideo||!thresholdVideo.duration)return;
  // Ignora apenas diferenças inferiores a um quadro para não criar seeks redundantes.
  if(Math.abs(seekTarget-thresholdVideo.currentTime)<scrubFrameStep*.9)return;
  seekBusy=true;seekStartedAt=performance.now();
  clearTimeout(seekGuard);
  // se o 'seeked' nunca vier (midia em buffer, aba oculta), nao trava para sempre; mas
  // enquanto o proprio video diz que ainda esta buscando (ate 1,6 s), nao empilha outro
  seekGuard=setTimeout(releaseSeek,400);
  thresholdVideo.currentTime=seekTarget;
 };
 const releaseSeek=()=>{
  if(thresholdVideo.seeking&&performance.now()-seekStartedAt<1600){seekGuard=setTimeout(releaseSeek,200);return}
  seekBusy=false;flushSeek();
 };
 thresholdVideo?.addEventListener('seeked',()=>{clearTimeout(seekGuard);seekBusy=false;flushSeek()});
 // Aceita medidas ja lidas por quem chamou, para o updateMotion poder agrupar todas
 // as leituras de layout antes de qualquer escrita (uma reflow por frame, nao varias).
 const updateThreshold=(preRead,force)=>{
  if(!thresholdEl)return;
  const rectTop=preRead?preRead.top:thresholdEl.getBoundingClientRect().top;
  const boxH=preRead?preRead.boxH:thresholdEl.offsetHeight;
  const span=boxH-innerHeight,p=Math.max(0,Math.min(1,-rectTop/(span||1)));
  if(p!==lastHeroP||force){lastHeroP=p;writeHeroStyles(p)}
  if(framesActive){heroFrames?.show(p);return}
  // scrub nos dois formatos: o 9:16 agora tem keyframes densos, entao aceita seek.
  // Seek nao exige gesto do usuario, o que tira a politica de autoplay do caminho.
  // Basta a duracao (metadata). Exigir readyState>=2 travava o video para sempre quando
  // o Safari descartava os dados de um video parado fora da tela: o alvo parava de ser
  // atualizado e a tela ficava congelada no ultimo quadro (o creme). Um seek com
  // readyState 1 e justamente o que faz o navegador buscar e decodificar de novo.
  if(thresholdVideo&&thresholdVideo.duration){
   seekTarget=Math.min(thresholdVideo.duration-.05,p*thresholdVideo.duration);
   flushSeek();
  }
 };
 // Abaixo do hero p fica cravado em 1: reescrever os mesmos 6 estilos a cada frame do
 // resto da pagina era trabalho a toa. So o seek continua rodando sempre (o resync depende).
 let lastHeroP=-1;
 const writeHeroStyles=p=>{
  // transform direto no video: --t no .threshold herdava para todo o hero e custava
  // ~8 ms de recalculo de estilo por frame so para escalar uma camada.
  const scrubEl=framesActive?framesCanvas:thresholdVideo;
  if(scrubEl)scrubEl.style.transform=`scale(${(1+p*.07).toFixed(4)})`;
  // Cada camada sai na sua propria janela, com smoothstep. Antes era tudo linear e
  // comprimido no primeiro terco: sobravam 48% do percurso sem nada acontecer e o
  // creme entrava de supetao nos ultimos 12%.
  const ramp=(v,a,b)=>{const x=Math.max(0,Math.min(1,(v-a)/(b-a)));return x*x*(3-2*x)};
  const out=(a,b)=>1-ramp(p,a,b);
  // Grava opacity/transform direto no elemento em vez de var(--x) lido via CSS: no
  // Safari mobile, opacity dependente de custom property as vezes fica com o repaint
  // atrasado num flick rapido (o video, que tem seu proprio caminho de decodificacao,
  // segue liso enquanto o texto "fantasma" no valor antigo). Escrita direta e o
  // caminho de composicao que o Safari trata com prioridade.
  if(thresholdStampEl)thresholdStampEl.style.opacity=out(.02,.34);
  if(thresholdCopyEl){const rise=ramp(p,.04,.42);thresholdCopyEl.style.opacity=out(.04,.42);thresholdCopyEl.style.transform=`translateY(${(rise*-46).toFixed(2)}px)`}
  if(thresholdVeilEl)thresholdVeilEl.style.opacity=out(0,.52);
  if(thresholdExitEl)thresholdExitEl.style.opacity=ramp(p,.76,1);
 };
 updateThresholdRef=updateThreshold;
 // Recuperacao quando o hero volta a aparecer. O iOS libera o decodificador de um video
 // parado fora da tela (ou ao trocar de app) sem avisar: currentTime muda, 'seeked'
 // dispara, mas nenhum quadro novo e pintado ate o video tocar de novo. Entao, ao
 // voltar depois de um tempo longe, repete o play/pause mudo do carregamento inicial e
 // ressincroniza com o scroll. Se os dados foram descartados por completo, recarrega.
 if(thresholdVideo&&thresholdEl){
  let heroAwaySince=0;
  const resync=()=>{if(!framesActive&&!thresholdVideo.seeking){clearTimeout(seekGuard);seekBusy=false}updateThreshold()};
  const revive=()=>{if(!framesActive)primeVideoRef?.();resync()};
  // seeks terminando sem nenhum quadro novo pintado = decodificador solto; reacorda.
  // Conta seeks concluidos sem nenhum quadro pintado (3 seguidos = travado de verdade). Antes
  // era "1,2 s sem quadro", o que disparava so por o usuario ter parado de rolar e dava
  // um play no meio do scrub. So vale em navegador que ja provou avisar quadro de seek
  // com o video pausado; nos outros, o contador nunca zeraria e viraria play a cada 2 s.
  let lastStallPrime=0;
  thresholdVideo.addEventListener('seeked',()=>{
   if(framesActive||!pausedPaintSeen||!thresholdVideo.paused||++seeksSincePaint<3)return;
   const now=performance.now();if(now-lastStallPrime<2000)return;
   seeksSincePaint=0;lastStallPrime=now;
   const box=thresholdEl.getBoundingClientRect();
   if(box.bottom>0&&box.top<innerHeight)primeVideoRef?.();
  });
  new IntersectionObserver(entries=>{
   const entry=entries[entries.length-1];
   if(!entry.isIntersecting){heroAwaySince=performance.now();return}
   if(heroAwaySince&&performance.now()-heroAwaySince>2500)revive();else resync();
   heroAwaySince=0;
  }).observe(thresholdEl);
  addEventListener('pageshow',e=>{if(e.persisted)revive()});
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&thresholdEl.getBoundingClientRect().bottom>0)revive()});
  // quando os dados voltam (carga inicial ou recarga), casa com a posicao atual
  // ('canplay' nao: pode disparar depois de cada seek e liberaria um seek sobreposto)
  thresholdVideo.addEventListener('loadeddata',resync);
 }
 applyStageRef?.();
 return {el:thresholdEl,update:updateThreshold};
};
