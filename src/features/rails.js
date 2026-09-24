// Numeracao das avaliacoes e os trilhos horizontais do celular (galeria, avaliacoes, guia)
// com contador e bolinhas sincronizados com a rolagem.
export const initReviewIndexes=()=>{
 document.querySelectorAll('.review').forEach((card,i)=>card.dataset.index=String(i+1).padStart(2,'0'));
};
export const initRails=reduced=>{
 const atmosphereRail=document.querySelector('.atmosphere-rail');
 if(atmosphereRail){const cards=[...atmosphereRail.querySelectorAll('.atmosphere-card')],status=document.querySelector('[data-rail="atmosphere"]'),dots=[...status.querySelectorAll('button')],label=status.querySelector('p span'),count=status.querySelector('p b'),names=['O salão como cenário','Rosa em todos os detalhes','Luzes sobre o jardim','A vitrine como primeiro convite'];let raf=false,active=0;const setActive=i=>{active=i;dots.forEach((d,n)=>{d.classList.toggle('active',n===i);d.setAttribute('aria-selected',String(n===i))});count.textContent=String(i+1).padStart(2,'0');label.textContent=names[i]};const update=()=>{const c=atmosphereRail.scrollLeft+atmosphereRail.clientWidth/2;let best=0,dist=Infinity;cards.forEach((card,i)=>{const d=Math.abs(card.offsetLeft+card.offsetWidth/2-c);if(d<dist){dist=d;best=i}});if(best!==active)setActive(best);raf=false};atmosphereRail.addEventListener('scroll',()=>{if(!raf){requestAnimationFrame(update);raf=true}},{passive:true});dots.forEach((dot,i)=>dot.addEventListener('click',()=>{atmosphereRail.scrollTo({left:cards[i].offsetLeft-atmosphereRail.offsetLeft,behavior:reduced?'auto':'smooth'});setActive(i)}));setActive(0)}

 for(const [selector,key] of [['.reviews-grid','reviews'],['.guide-grid','guide']]){const rail=document.querySelector(selector),status=document.querySelector(`[data-rail-status="${key}"]`);if(!rail||!status)continue;const cards=[...rail.children],number=status.querySelector('b'),bar=status.querySelector('i');let frame=false,shown=-1;const update=()=>{const center=rail.scrollLeft+rail.clientWidth/2;let active=0,distance=Infinity;cards.forEach((card,i)=>{const d=Math.abs(card.offsetLeft+card.offsetWidth/2-center);if(d<distance){distance=d;active=i}});if(active!==shown){shown=active;number.textContent=String(active+1).padStart(2,'0');bar.style.setProperty('--rail-progress',`${((active+1)/cards.length)*100}%`)}frame=false};rail.addEventListener('scroll',()=>{if(!frame){requestAnimationFrame(update);frame=true}},{passive:true});update();
  // o contador "01 / 04, arraste" so faz sentido quando o trilho rola de fato (entre 521 e
  // 900px a grade de guias vira 2x2 e o contador ficava parado, sugerindo um gesto inexistente)
  const syncStatic=()=>status.classList.toggle('rail-static',rail.scrollWidth<=rail.clientWidth+1);syncStatic();new ResizeObserver(syncStatic).observe(rail)}
};
