import { skipLink, intro, topbar, mobileMenu, whatsappFloat, hero, ribbon, manifesto, quote, atmosphere, table, heritage, reviews, guide, visit, footer } from './sections.js';

// Monta a pagina inteira (a ordem aqui e a ordem na tela).
export const pageHTML=()=>`
${skipLink()}
${intro()}
${topbar()}
${mobileMenu()}
${whatsappFloat()}
<main id="conteudo">
${hero()}
${ribbon()}
${manifesto()}
${quote()}
${atmosphere()}
${table()}
${heritage()}
${reviews()}
${guide()}
${visit()}
</main>
${footer()}`;

export const renderPage=root=>{root.innerHTML=pageHTML()};
