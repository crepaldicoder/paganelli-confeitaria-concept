// "Aberto agora · até 19h" ao lado do horário (so existe quando o horário esta preenchido).
import { openStatus } from '../content/hours.js';

export const initOpenStatus=()=>{
 const el=document.querySelector('[data-open-status]');
 if(!el)return;
 const tick=()=>{const s=openStatus();if(!s)return;el.textContent=s.text;el.classList.toggle('is-open',s.open);el.hidden=false};
 tick();setInterval(tick,60000);
};
