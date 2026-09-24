// Vercel Web Analytics: sem cookies, sem banner. Mede visitas e os cliques que viram
// cliente: ligar, WhatsApp (flutuante x encomenda), rota no Maps e Instagram.
// So comeca a registrar depois que "Web Analytics" for ativado no painel da Vercel.
import { inject, track } from '@vercel/analytics';

const channel=a=>{
 const h=a.getAttribute('href')||'';
 if(h.startsWith('tel:'))return 'telefone';
 if(h.includes('wa.me'))return a.closest('.daily-card')?'whatsapp-encomenda':'whatsapp';
 if(h.includes('google.com/maps'))return 'rota';
 if(h.includes('instagram.com'))return 'instagram';
 return null;
};
const place=a=>a.closest('.whatsapp-float')?'botao-flutuante':a.closest('header')?'topo':a.closest('footer')?'rodape':a.closest('section')?.id||a.closest('section')?.classList[0]||'pagina';

export const initAnalytics=()=>{
 inject();
 document.addEventListener('click',e=>{
  const a=e.target.closest?.('a[href]');
  const c=a&&channel(a);
  if(c)track('contato',{canal:c,local:place(a)});
 },{capture:true,passive:true});
};
