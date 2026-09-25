import { heroVideoDebug } from './hero-video.js';

// Diagnostico sob demanda (so com ?diag=1 na URL): mostra na tela o estado real do video
// no aparelho, que e a unica forma de ver o que acontece num Android/iPhone de verdade.
export const initDiagnostics=()=>{
 const thresholdVideo=heroVideoDebug.video;
 if(!thresholdVideo||!location.search.includes('diag'))return;
 const box=document.createElement('pre');
 box.style.cssText='position:fixed;left:8px;top:80px;z-index:9999;margin:0;padding:8px 10px;background:rgba(0,0,0,.82);color:#7CFF9B;font:11px/1.45 ui-monospace,monospace;white-space:pre;border-radius:6px;pointer-events:none;max-width:92vw';
 document.body.appendChild(box);
 const estados=['0 vazio','1 metadata','2 quadro atual','3 dados a frente','4 completo'];
 setInterval(()=>{
  const v=thresholdVideo,e=v.error,lastVideoPaint=heroVideoDebug.lastPaint,paint=lastVideoPaint?Math.round(performance.now()-lastVideoPaint)+'ms':'NUNCA';
  const f=heroVideoDebug.frames;
  if(f){box.textContent=['modo      quadros (canvas)','carregados '+f.loaded+'/'+f.count,'na tela   '+f.drawn+' (alvo '+f.target+')','canvas    '+f.size,'tela      '+innerWidth+'x'+innerHeight].join('\n');return}
  box.textContent=[
   'arquivo   '+(v.currentSrc||v.src||'(sem src)').split('/').pop(),
   'readyState '+(estados[v.readyState]||v.readyState),
   'network   '+['vazio','ocioso','carregando','sem fonte'][v.networkState],
   'duracao   '+(v.duration||'?'),
   'tempo     '+v.currentTime.toFixed(2)+(v.paused?' (pausado)':' (tocando)'),
   'quadro ha '+paint,
   'buffer    '+(v.buffered.length?v.buffered.end(v.buffered.length-1).toFixed(1)+'s':'0'),
   'erro      '+(e?e.code+' '+(e.message||''):'nenhum'),
   'tela      '+innerWidth+'x'+innerHeight
  ].join('\n');
 },250);
}
