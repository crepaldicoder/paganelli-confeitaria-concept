// Dados estruturados (schema.org/Bakery) para o Google entender que isto e uma confeitaria,
// onde fica e como falar com ela: e o que alimenta a busca local ("confeitaria perto de mim").
// Sem avaliacoes aqui: o Google nao exibe nota que o proprio negocio publica sobre si.
import * as biz from '../content/business.js';

const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export const initStructuredData=()=>{
 const data={
  '@context':'https://schema.org','@type':'Bakery',
  name:biz.name,url:location.origin+'/',image:location.origin+'/images/og-paganelli-1200x630.jpg',
  description:document.querySelector('meta[name="description"]')?.content,
  telephone:biz.phoneE164,
  address:{'@type':'PostalAddress',streetAddress:`${biz.street} - ${biz.district}`,addressLocality:biz.city,addressRegion:biz.region,postalCode:biz.postalCode,addressCountry:'BR'},
  geo:{'@type':'GeoCoordinates',latitude:biz.geo.lat,longitude:biz.geo.lng},
  hasMap:biz.maps,sameAs:[biz.instagram]
 };
 if(Array.isArray(biz.hours)&&biz.hours.length)data.openingHoursSpecification=biz.hours.map(([days,opens,closes])=>({'@type':'OpeningHoursSpecification',dayOfWeek:days.map(d=>DAYS[d]),opens,closes}));
 const script=document.createElement('script');script.type='application/ld+json';script.textContent=JSON.stringify(data);
 document.head.appendChild(script);
};
