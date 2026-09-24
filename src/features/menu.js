// Menu do celular: abre/fecha, prende o foco dentro dele e pausa a rolagem suave.
export const initMenu=lenis=>{
 const trigger=document.querySelector('.menu-trigger'), menu=document.querySelector('.mobile-menu'), close=document.querySelector('.menu-close');
 menu.inert=true;
 const focusables=()=>[close,...menu.querySelectorAll('a')];
 function openMenu(){menu.inert=false;menu.classList.add('open');menu.setAttribute('aria-hidden','false');trigger.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');lenis?.stop();setTimeout(()=>close.focus(),120)}
 function closeMenu(){menu.classList.remove('open');menu.setAttribute('aria-hidden','true');menu.inert=true;trigger.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');if(!document.body.classList.contains('intro-playing'))lenis?.start();trigger.focus()}
 trigger.addEventListener('click',openMenu);close.addEventListener('click',closeMenu);menu.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(!menu.classList.contains('open'))return;if(e.key==='Escape')closeMenu();if(e.key==='Tab'){const f=focusables(),first=f[0],last=f.at(-1);if(!menu.contains(document.activeElement)){e.preventDefault();(e.shiftKey?last:first).focus();return}if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
 return menu;
};
