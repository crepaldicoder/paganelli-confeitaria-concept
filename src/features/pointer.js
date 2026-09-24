// Efeitos de mouse (so em desktop com mouse): botoes "magneticos" e o selo que inclina.
export const initPointerEffects=reduced=>{
 if(!reduced&&matchMedia('(hover:hover) and (pointer:fine)').matches){document.querySelectorAll('.button.primary,.top-cta').forEach(el=>{el.addEventListener('pointermove',event=>{const rect=el.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5;el.style.setProperty('--mag-x',`${x*12}px`);el.style.setProperty('--mag-y',`${y*8}px`)});el.addEventListener('pointerleave',()=>{el.style.setProperty('--mag-x','0px');el.style.setProperty('--mag-y','0px')})});
  const stampEl=document.querySelector('.stamp');
  stampEl?.addEventListener('pointermove',event=>{const rect=stampEl.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5,angle=Math.atan2(y,x)*180/Math.PI;stampEl.style.setProperty('--tilt-x',`${x*18}deg`);stampEl.style.setProperty('--tilt-y',`${-y*18}deg`);stampEl.style.setProperty('--glare-x',`${x*30}px`);stampEl.style.setProperty('--glare-y',`${y*30}px`);stampEl.style.setProperty('--glare-rot',`${angle}deg`)});
  stampEl?.addEventListener('pointerleave',()=>{stampEl.style.setProperty('--tilt-x','0deg');stampEl.style.setProperty('--tilt-y','0deg');stampEl.style.setProperty('--glare-x','0px');stampEl.style.setProperty('--glare-y','0px');stampEl.style.removeProperty('--glare-rot')});
 }
};
