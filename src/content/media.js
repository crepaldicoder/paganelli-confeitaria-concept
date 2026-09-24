// Um so logo animado (intro, topo e rodape): mesma URL = mesma imagem, entao a animacao
// e uma so. O ?v= muda quando o arquivo muda (as imagens ficam 1 dia em cache).
export const LOGO='/images/logo-paganelli-abertura.svg?v=2';
const photoSize={'hero-folhado':[1122,1402],'interior-editorial':[1086,1448],'sala-rosa-editorial':[1023,1537],'ambiente-luzes-editorial':[1333,1180],'vitrine-editorial':[1453,1082],'torta-isolada':[809,810]};
export const photo=(name,alt,eager=false)=>{const [w,h]=photoSize[name];const load=eager?'fetchpriority="high"':'loading="lazy" decoding="async"';return `<picture><source srcset="/images/${name}.avif" type="image/avif"><img src="/images/${name}.webp" alt="${alt}" width="${w}" height="${h}" ${load}></picture>`};
