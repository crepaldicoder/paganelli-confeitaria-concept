// Formata o horário de business.js para o site e calcula "aberto agora" no fuso de Rio Preto.
import { hours } from './business.js';

const DAY=['dom','seg','ter','qua','qui','sex','sáb'];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const time=t=>{const [h,m]=t.split(':');return `${+h}h${m==='00'?'':m}`};
const dayLabel=days=>{
 const d=[...days].sort((a,b)=>a-b);
 const consecutive=d.every((v,i)=>!i||v===d[i-1]+1);
 if(d.length===1)return cap(DAY[d[0]]);
 return consecutive&&d.length>2?`${cap(DAY[d[0]])} a ${DAY[d.at(-1)]}`:d.map((v,i)=>i?DAY[v]:cap(DAY[v])).join(', ');
};
export const hasHours=()=>Array.isArray(hours)&&hours.length>0;
export const hoursLines=()=>hasHours()?hours.map(([days,open,close])=>`${dayLabel(days)} · ${time(open)} às ${time(close)}`):[];

// "Aberto agora · até 19h" / "Fechado agora" no horário de São Paulo, não no do visitante.
export const openStatus=(now=new Date())=>{
 if(!hasHours())return null;
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(p=>[p.type,p.value]));
 const day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(parts.weekday),mins=+parts.hour*60+ +parts.minute;
 const toMin=t=>{const [h,m]=t.split(':');return +h*60+ +m};
 const today=hours.filter(([days])=>days.includes(day));
 const open=today.find(([,o,c])=>mins>=toMin(o)&&mins<toMin(c));
 return open?{open:true,text:`Aberto agora · até ${time(open[2])}`}:{open:false,text:'Fechado agora'};
};
