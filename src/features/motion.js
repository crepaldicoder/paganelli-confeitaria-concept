// Movimento da pagina: campos de impressao, intro, revelacao das secoes, parallax das
// fotos, progresso no topo e o loop de scroll (que tambem move o hero).
export const initMotion=({reduced,lenis,menu,hero})=>{
document.querySelectorAll('.quote-band,.table-section,.heritage-number,.before-you-go').forEach(section=>{section.classList.add('motion-scene');const field=document.createElement('span');field.className='print-motion-field';field.setAttribute('aria-hidden','true');section.prepend(field)});
const revealTargets=[...document.querySelectorAll('.reveal,.construct,.image-build')];
if(reduced){document.body.classList.add('site-ready');revealTargets.forEach(el=>el.classList.add(el.classList.contains('reveal')?'visible':'built'))}
else{
 document.body.classList.add('motion-ready');
 let introSeen=false;try{introSeen=sessionStorage.getItem('pg-intro')==='1'}catch{}
 if(introSeen){document.querySelector('.build-intro')?.remove();document.body.classList.add('site-ready')}
 else{
  document.body.classList.add('intro-playing');
  lenis?.stop();
  try{sessionStorage.setItem('pg-intro','1')}catch{}
  setTimeout(()=>{document.body.classList.add('site-ready');document.body.classList.remove('intro-playing');if(!menu.classList.contains('open'))lenis?.start()},1640);
 }
 const buildImage=el=>{const rail=el.closest('.atmosphere-rail');if(rail){if(rail.dataset.buildScheduled)return;rail.dataset.buildScheduled='true';rail.querySelectorAll('.image-build').forEach((card,i)=>setTimeout(()=>card.classList.add('built'),i*170))}else el.classList.add('built')};
 // Mesmas zonas do fallback revealPassed: texto comeca a entrar um pouco antes de aparecer
 // (topo < 108% da tela), imagem quando o topo passa de 88%. Com o observer mais tardio
 // (threshold .1 e -10%), quem vencia dependia da velocidade do scroll e do timer de 400 ms.
 const onReveal=(entries,obs)=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;if(el.classList.contains('reveal'))el.classList.add('visible');if(el.classList.contains('construct'))el.classList.add('built');if(el.classList.contains('image-build'))buildImage(el);obs.unobserve(el)});
 const io=new IntersectionObserver(onReveal,{rootMargin:'0px 0px 8% 0px'}),ioImage=new IntersectionObserver(onReveal,{rootMargin:'0px 0px -12% 0px'});
 revealTargets.forEach((el,i)=>{if(el.classList.contains('reveal'))el.style.setProperty('--reveal-delay',`${(i%4)*90}ms`);(el.classList.contains('image-build')?ioImage:io).observe(el)});
 const topProgress=document.querySelector('.topbar-progress'),navLinks=[...document.querySelectorAll('.desktop-nav a')],chapterStops=[['inicio','Início'],['oficio','O ofício'],['mesa','Da vitrine'],['avaliacoes','Avaliações'],['visita','Visite']].map(([id,label])=>({el:document.getElementById(id),label})),scenePanels=[...document.querySelectorAll('.motion-scene')],parallaxFrames=[...document.querySelectorAll('.image-build')];let lastChapter=-1,mobileParallaxSettled=false;
 // O parallax so importa perto da tela, mas antes lia/escrevia os 6 quadros em todo
 // frame de scroll — inclusive durante o scroll inteiro do hero, bem antes de
 // qualquer um deles existir na tela. Um IntersectionObserver com margem generosa
 // mantem um conjunto pequeno de "quem vale a pena medir agora"; fora dele o loop
 // nem chega a rodar.
 const parallaxIndex=new Map(parallaxFrames.map((f,i)=>[f,i])),activeParallax=new Set(),activeScenes=new Set();
 // as variaveis de parallax vao no <img>, unico que as usa: na <figure> elas herdavam para
 // ~10 elementos por card e todos recalculavam estilo a cada frame
 const parallaxImg=new Map(parallaxFrames.map(f=>[f,f.querySelector('img')||f]));
 if(scenePanels.length){
  const sceneObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting)activeScenes.add(entry.target);else activeScenes.delete(entry.target)
  }),{rootMargin:'35% 0px'});
  scenePanels.forEach(p=>sceneObserver.observe(p));
 }
 if(parallaxFrames.length){
  const parallaxObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting)activeParallax.add(entry.target);else activeParallax.delete(entry.target)
  }),{rootMargin:'35% 0px'});
  parallaxFrames.forEach(f=>parallaxObserver.observe(f));
 }
 const updateMotion=()=>{
  const wide=innerWidth>900;
  // ---- FASE DE LEITURA: tudo que consulta layout, agrupado, antes de escrever ----
  const thresholdEl=hero?.el,thresholdRead=thresholdEl?{top:thresholdEl.getBoundingClientRect().top,boxH:thresholdEl.offsetHeight}:null;
  const max=document.documentElement.scrollHeight-innerHeight,sy=scrollY;
  let active=0;
  chapterStops.forEach((stop,i)=>{if(stop.el&&stop.el.getBoundingClientRect().top<=innerHeight*.45)active=i});
  const parallaxRead=[];
  if(wide)activeParallax.forEach(frame=>{const r=frame.getBoundingClientRect();parallaxRead.push([frame,(r.top+r.height/2-innerHeight/2)/innerHeight])});
  // So no desktop: abaixo de 900px o CSS zera esse transform (transform:none!important),
  // entao medir e escrever ali era trabalho jogado fora a cada frame de scroll.
  const sceneRead=wide?[...activeScenes].map(panel=>{const r=panel.getBoundingClientRect();return [panel,Math.max(-1,Math.min(1,(r.top+r.height/2-innerHeight/2)/innerHeight))]}):[];
  // ---- FASE DE ESCRITA: daqui pra baixo nada le layout, entao nao forca reflow ----
  hero?.update(thresholdRead);
  const p=Math.max(0,Math.min(1,sy/(max||1)));
  topProgress?.style.setProperty('--progress',p);
  if(active!==lastChapter){/* chapterStops[0] e o hero, que nao tem link no topo */navLinks.forEach((a,i)=>a.classList.toggle('is-active',i===active-1));lastChapter=active}
  // transform direto no <span> decorativo: --scene-shift-* na secao herdava para todo o
  // conteudo dela e custava ~7 ms de recalculo de estilo por frame.
  sceneRead.forEach(([panel,local])=>{const field=panel.firstElementChild;if(field?.classList.contains('print-motion-field'))field.style.transform=`translate3d(${(local*28).toFixed(1)}px,${(local*-12).toFixed(1)}px,0) rotate(-1.5deg)`});
  if(!wide){if(!mobileParallaxSettled){parallaxFrames.forEach(frame=>{const img=parallaxImg.get(frame);img.style.setProperty('--parallax-y','0px');img.style.setProperty('--parallax-x','0px');img.style.setProperty('--parallax-scale','1.045')});mobileParallaxSettled=true}}
  else{mobileParallaxSettled=false;parallaxRead.forEach(([frame,d])=>{const index=parallaxIndex.get(frame),depth=.72+(index%3)*.14,img=parallaxImg.get(frame);img.style.setProperty('--parallax-y',`${Math.max(-34,Math.min(34,-d*27*depth))}px`);img.style.setProperty('--parallax-x',`${Math.max(-9,Math.min(9,d*(index%2?6:-6)))}px`);img.style.setProperty('--parallax-scale',String(1.04+Math.min(.035,Math.abs(d)*.025)))})}
 };
 let pendingReveal=[...revealTargets];
 // Fallback: o IntersectionObserver (io, abaixo) e quem revela na pratica. Isso aqui
 // so existe para o caso do observer falhar, entao nao precisa reler layout de quem
 // ja foi revelado (corta a lista rapido) nem rodar em todo frame de scroll (throttle
 // em runUpdate) — antes isso sozinho respondia por ~38 das 54 leituras de layout
 // por frame, no pior caso bem no topo da pagina, durante o scroll do hero.
 const revealPassed=()=>{if(!pendingReveal.length)return;const nearBottom=scrollY+innerHeight>=document.documentElement.scrollHeight-12;pendingReveal=pendingReveal.filter(el=>{if(el.classList.contains('visible')||el.classList.contains('built'))return false;const r=el.getBoundingClientRect(),isImage=el.classList.contains('image-build'),skipped=r.bottom<=0,inZone=isImage?(r.top<innerHeight*.88&&r.bottom>0):r.top<innerHeight*1.08;if(!(nearBottom||skipped||inZone))return true;if(el.classList.contains('reveal'))el.classList.add('visible');if(el.classList.contains('construct'))el.classList.add('built');if(isImage)buildImage(el);return false})};
 // O fallback de revelacao sai do caminho do scroll: vira um timer de baixa frequencia que
 // se desliga sozinho quando a lista zera. Assim nenhum frame de scroll paga por ele.
 // O IntersectionObserver continua sendo quem revela de fato, na hora certa.
 const revealSweep=()=>{revealPassed();if(pendingReveal.length)setTimeout(revealSweep,400)};
 setTimeout(revealSweep,400);
 // O update roda dentro do proprio frame do Lenis (mesmo quadro em que o scroll mudou).
 // (Havia um fallback com o evento 'scroll' nativo, mas ele nunca rodava: este bloco so
 // existe sem reduced motion, e nesse caso o Lenis sempre existe.)
 lenis.on('scroll',updateMotion);
 updateMotion();revealPassed();
}
};
