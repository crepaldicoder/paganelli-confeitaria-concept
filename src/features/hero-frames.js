// Hero do celular como sequencia de quadros num <canvas> (o mesmo truque das paginas de
// produto da Apple). No iPhone cada seek do <video> levava ~110 ms nos quadros pesados do
// comeco (fachada detalhada, keyframes de ~78 KB): o scrub andava a ~9 quadros/s e so ficava
// fluido no fim, onde os quadros sao leves. Desenhar uma imagem ja baixada e sincrono e
// barato, entao o quadro acompanha o dedo em qualquer ponto do percurso.
// Quadros: fachada-entrada-9x16 (60 fps) um sim um nao = 175 WebP 608x1080, ~5,4 MB.
export const createHeroFrames=(canvas,{count,url,parallel=6})=>{
 const ctx=canvas.getContext('2d');
 const imgs=new Array(count),failed=new Uint8Array(count);
 let natW=0,natH=0,sx=0,sy=0,sw=0,sh=0;
 let target=0,drawn=-1,started=false,next=0,inflight=0,loadedCount=0;
 // Ordem de download do grosso para o fino (de 32 em 32, depois 16, 8...): num flick logo
 // no inicio ja existe um quadro proximo de qualquer ponto, e ele vai sendo refinado.
 const order=[],queued=new Uint8Array(count);
 for(let stride=32;stride>=1;stride>>=1)for(let i=0;i<count;i+=stride)if(!queued[i]){queued[i]=1;order.push(i)}
 const nearestLoaded=i=>{
  for(let d=0;d<count;d++){
   if(i-d>=0&&imgs[i-d])return i-d;
   if(i+d<count&&imgs[i+d])return i+d;
   if(i-d<0&&i+d>=count)break;
  }
  return -1;
 };
 const draw=()=>{
  if(!natW)return;
  const i=nearestLoaded(target);
  if(i<0||i===drawn)return;
  ctx.drawImage(imgs[i],sx,sy,sw,sh,0,0,canvas.width,canvas.height);
  drawn=i;
 };
 // Recorte "cover" centralizado, igual ao object-fit:cover do <video> que ele substitui. O
 // canvas guarda so a parte visivel, na resolucao da imagem (sem ampliar a memoria).
 const measure=()=>{
  const w=canvas.clientWidth,h=canvas.clientHeight;
  if(!natW||!w||!h)return;
  const s=Math.max(w/natW,h/natH);
  sw=Math.min(natW,w/s);sh=Math.min(natH,h/s);sx=(natW-sw)/2;sy=(natH-sh)/2;
  const cw=Math.round(sw),ch=Math.round(sh);
  if(canvas.width!==cw||canvas.height!==ch){canvas.width=cw;canvas.height=ch}
  drawn=-1;draw();
 };
 const pump=()=>{
  while(inflight<parallel&&next<order.length){
   const i=order[next++],img=new Image();
   inflight++;
   img.decoding='async';
   img.onload=()=>{
    inflight--;imgs[i]=img;loadedCount++;
    if(!natW){natW=img.naturalWidth;natH=img.naturalHeight;measure()}
    // redesenha so se o quadro novo fica mais perto do alvo do que o que esta na tela
    else if(drawn<0||Math.abs(i-target)<Math.abs(drawn-target))draw();
    pump();
   };
   // uma segunda chance no fim da fila (rede movel oscilando); depois disso o vizinho cobre
   img.onerror=()=>{inflight--;if(!failed[i]++)order.push(i);pump()};
   img.src=url(i);
  }
 };
 new ResizeObserver(measure).observe(canvas);
 return {
  start(){if(started)return;started=true;pump()},
  show(p){target=Math.round(Math.max(0,Math.min(1,p))*(count-1));if(target!==drawn)draw()},
  get stats(){return {loaded:loadedCount,count,drawn,target,size:`${canvas.width}x${canvas.height}`}}
 };
};
