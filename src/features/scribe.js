// Titulos de secao "escritos": cada palavra vira um <span> que entra em sequencia, com um
// traco desenhado embaixo.
export const initScribeTitles=()=>{
 const writingTargets=document.querySelectorAll('.manifesto-copy h2,.quote-band p,.atmosphere-head h2,.table-head h2,.heritage-copy h2,.reviews-head h2,.guide-head h2,.visit-copy h2');
 const wrapWords=(root)=>{
  let index=0;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()) if(walker.currentNode.nodeValue.trim()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
   const fragment=document.createDocumentFragment();
   // separa em espaco comum, mas nao no &nbsp; ("Rio Preto" fica uma palavra so)
   node.nodeValue.split(/([^\S ]+)/).forEach(part=>{
    if(!part.trim()){fragment.append(part);return}
    const span=document.createElement('span');span.className='scribe-word';span.style.setProperty('--word',index++);span.textContent=part;fragment.append(span);
   });
   node.replaceWith(fragment);
  });
  root.classList.add('scribe-title');
  root.insertAdjacentHTML('beforeend','<svg class="write-line" viewBox="0 0 600 70" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M8 48 C112 18 205 66 302 39 S486 24 592 45"/></svg>');
 };
 writingTargets.forEach(wrapWords);
};
