export const initRibbon=reduced=>{
 // A faixa em marquee roda infinita; fora da tela (todo o hero e o resto da pagina) so
 // gastava frame do compositor. Pausa com 100px de folga, retoma do mesmo ponto.
 const ribbonEl=document.querySelector('.ribbon');
 if(ribbonEl&&!reduced)new IntersectionObserver(([e])=>ribbonEl.classList.toggle('is-offscreen',!e.isIntersecting),{rootMargin:'100px 0px'}).observe(ribbonEl);
};
