// Uma funcao por bloco da pagina. O HTML e exatamente o que ficava na string unica do
// main.js (mesmos espacos e quebras), so separado para dar para achar e editar cada parte.
import { phone, maps, instagram, whatsapp, whatsappOrder, phoneDisplay, street, district, postalCode, categories } from '../content/business.js';
import { hasHours, hoursLines } from '../content/hours.js';
import { svg, ratingStars } from '../content/icons.js';
import { LOGO, photo } from '../content/media.js';
import { ribbonItems } from '../content/ribbon.js';

export const skipLink=()=>`<a class="skip" href="#conteudo">Pular para o conteúdo</a>`;
export const intro=()=>`<div class="build-intro" aria-hidden="true"><div class="intro-panel intro-panel--left"></div><div class="intro-panel intro-panel--right"></div><div class="intro-stage"><span class="intro-index">SÃO JOSÉ DO RIO PRETO · 1947</span><div class="intro-writing"><img class="intro-logo-revised" src="${LOGO}" alt="" width="1876" height="462"></div><p>uma receita construída<br>traço por traço</p></div></div>`;
export const topbar=()=>`<header class="topbar">
  <a class="brand" href="#inicio" aria-label="Paganelli, início"><img class="literal-logo" src="${LOGO}" alt="" width="1876" height="462"></a>
  <nav class="desktop-nav" aria-label="Principal"><a href="#oficio">O ofício</a><a href="#mesa">Da vitrine</a><a href="#avaliacoes">Avaliações</a><a href="#visita">Visite</a></nav>
  <a class="top-cta" href="${phone}">${svg('phone')} Ligar agora</a>
  <button class="menu-trigger" aria-expanded="false" aria-controls="menu"><span>Menu</span><i></i><i></i></button>
  <i class="topbar-progress" aria-hidden="true"></i>
</header>`;
export const mobileMenu=()=>`<div class="mobile-menu" id="menu" aria-hidden="true" data-lenis-prevent>
 <button class="menu-close" aria-label="Fechar menu"><span>Fechar</span><i aria-hidden="true"></i></button>
 <nav aria-label="Navegação móvel"><a href="#inicio">01 — Início</a><a href="#oficio">02 — O ofício</a><a href="#mesa">03 — Da vitrine</a><a href="#avaliacoes">04 — Avaliações</a><a href="#visita">05 — Visite</a></nav>
 <p>${street}<br>Vila Redentora · Rio&nbsp;Preto</p>
</div>`;
export const whatsappFloat=()=>`<a class="whatsapp-float" href="${whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Paganelli pelo WhatsApp"><span>Fale no WhatsApp</span>${svg('whatsapp')}</a>`;
export const hero=()=>`<section class="threshold" id="inicio" data-panel="pink">
 <div class="threshold-stage">
  <video class="threshold-video" muted playsinline webkit-playsinline preload="metadata" tabindex="-1" aria-hidden="true"></video>
  <div class="threshold-veil" aria-hidden="true"></div>
  <div class="hero-copy threshold-copy">
   <p class="eyebrow">Confeitaria em São José do Rio&nbsp;Preto</p>
   <h1 class="hero-title"><span>Receitas</span><span>que o tempo</span><em>aperfeiçoa.</em></h1>
   <p class="hero-intro">Há gerações, a Paganelli transforma o fazer artesanal, a vitrine generosa e o prazer de receber em uma tradição de Rio&nbsp;Preto.</p>
   <div class="hero-actions"><a class="button primary" href="${phone}">${svg('phone')} Falar com a confeitaria</a><a class="text-link" href="#oficio">Conheça nossa história ${svg('arrow')}</a></div>
   <div class="hero-facts"><span><b>4,7</b>${ratingStars(4.7,true)}<small>avaliação no Google</small></span></div>
   <div class="stamp" aria-hidden="true"><i class="stamp-glare"><i class="stamp-glare-spin"></i></i><span>feito com tempo</span><b>1947</b><small>RIO PRETO</small></div>
  </div>
  <div class="threshold-exit" aria-hidden="true"></div>
 </div>
</section>`;
export const ribbon=()=>`<section class="ribbon" aria-label="Valores" data-panel="blue"><div class="ribbon-track">${ribbonItems}</div></section>`;
export const manifesto=()=>`<section class="manifesto construct" id="oficio">
 <div class="chapter reveal"><span>Capítulo 01</span><b>O ofício</b></div>
 <div class="manifesto-copy reveal"><p class="kicker">Nem toda receita começa no papel.</p><h2>Algumas começam <em>nas mãos.</em></h2><p>Desde 1947, a Paganelli faz parte da história de Rio&nbsp;Preto. Uma tradição construída com cuidado, repetição e aquele olhar atento que reconhece o ponto certo de cada receita.</p></div>
 <figure class="craft-image reveal image-build">${photo('hero-folhado','Massa folhada com creme e frutas em uma bancada de confeitaria')}<figcaption><span>01</span> Delicadeza em cada camada</figcaption></figure>
 <div class="recipe-note reveal"><span>UMA BOA RECEITA PEDE</span><ul><li><b>01</b> matéria-prima</li><li><b>02</b> repetição e cuidado</li><li><b>03</b> tempo de forno</li><li><b>04</b> gente à mesa</li></ul></div>
</section>`;
export const quote=()=>`<section class="quote-band reveal construct" data-panel="pink"><p>“Tradição não é ficar parada.<br><em>É saber o que não pode se perder.</em>”</p><span>— Paganelli, desde 1947</span></section>`;
export const atmosphere=()=>`<section class="atmosphere construct" id="atmosfera">
 <div class="chapter reveal"><span>Interlúdio</span><b>Por dentro</b></div>
 <div class="atmosphere-head reveal"><p class="kicker">Matéria, cor e memória</p><h2>Uma atmosfera<br><em>que também alimenta.</em></h2><p>Um espaço pensado para acolher, escolher com calma e transformar uma visita à confeitaria em parte do dia.</p></div>
 <div class="atmosphere-rail" role="region" aria-label="Galeria da confeitaria" tabindex="0">
  <figure class="atmosphere-card image-build"><div class="media-frame">${photo('interior-editorial','Salão da Paganelli com mobiliário de madeira, teto rosa e iluminação quente')}</div><figcaption><span>01</span><div><b>O salão como cenário</b><small>madeira, rosa e luz natural</small></div></figcaption></figure>
  <figure class="atmosphere-card image-build"><div class="media-frame">${photo('sala-rosa-editorial','Segundo ângulo do salão rosa da Paganelli com mesas e balcão')}</div><figcaption><span>02</span><div><b>Rosa em todos os detalhes</b><small>do piso ao balcão da confeitaria</small></div></figcaption></figure>
  <figure class="atmosphere-card image-build"><div class="media-frame">${photo('ambiente-luzes-editorial','Parede floral da Paganelli iluminada por lâmpadas amarelas')}</div><figcaption><span>03</span><div><b>Luzes sobre o jardim</b><small>a parede floral em luz âmbar</small></div></figcaption></figure>
  <figure class="atmosphere-card image-build"><div class="media-frame">${photo('vitrine-editorial','Vitrine com folhados de limão da Paganelli')}</div><figcaption><span>04</span><div><b>A vitrine como primeiro convite</b><small>folhados preparados para o dia</small></div></figcaption></figure>
 </div>
 <div class="rail-status" data-rail="atmosphere"><div class="rail-dots"><button class="active" aria-label="Ver imagem 1" aria-selected="true"></button><button aria-label="Ver imagem 2" aria-selected="false"></button><button aria-label="Ver imagem 3" aria-selected="false"></button><button aria-label="Ver imagem 4" aria-selected="false"></button></div><p><b>01</b> / 04 <span>O salão como cenário</span></p><small>Arraste para o lado</small></div>
</section>`;
export const table=()=>`<section class="table-section construct" id="mesa" data-panel="pink">
 <div class="chapter light reveal"><span>Capítulo 02</span><b>Da vitrine</b></div>
 <div class="table-head reveal"><h2>Do doce ao salgado,<br><em>uma mesa inteira.</em></h2><p>Receitas para o café, para a sobremesa, para celebrar e para levar. A estrela da vitrine é a torta de frutas, feita com a massa folhada que o Sr. Valter criou.</p><ul class="rules" aria-label="O que tem na vitrine">${categories.map(c=>`<li>${c}</li>`).join('')}</ul></div>
 <figure class="table-image reveal image-build">${photo('torta-isolada','Torta de frutas da Paganelli vista de cima')}</figure>
 <div class="daily-card reveal"><small>A ESCOLHA CERTA É A DE HOJE</small><h3>Consulte a vitrine<br>e faça sua encomenda.</h3><div class="daily-actions"><a class="button paper" href="${whatsappOrder}" target="_blank" rel="noopener noreferrer">${svg('whatsapp')} Encomendar pelo WhatsApp</a><a class="button line" href="${phone}">${svg('phone')} ${phoneDisplay}</a></div></div>
</section>`;
export const heritage=()=>`<section class="heritage construct" data-panel="blue">
 <div class="heritage-number reveal"><small>Uma história desde</small><b>19<span>47</span></b></div>
 <div class="heritage-copy reveal"><h2>Uma tradição presente<br>na memória de Rio&nbsp;Preto.</h2><p>Tudo começou com o Sr. Valter Paganelli. Aos 13 anos, ele já fazia doces, tortas e bolos, só para a família.</p><p>Depois vieram a loja e uma massa folhada criada por ele, que deu origem à nossa torta de frutas: até hoje o carro-chefe da casa, conhecida em todo o Brasil.</p><p>Ingredientes de qualidade e a vontade de sempre melhorar cada receita construíram o nome Paganelli. Mais do que clientes, fizemos amigos pelo caminho, e hoje essa história já soma três gerações.</p><div class="rules"><span>Feito com cuidado</span><span>Receitas que permanecem</span><span>Gente à mesa</span></div></div>
</section>`;
export const reviews=()=>`<section class="reviews construct" id="avaliacoes">
 <div class="chapter reveal"><span>Capítulo 03</span><b>Avaliações</b></div>
 <div class="reviews-head reveal"><p class="kicker">Quem conhece, recomenda</p><h2>O que fica<br><em>depois da visita.</em></h2><div class="review-score"><b>4,7</b>${ratingStars(4.7)}<small>avaliação no Google</small></div></div>
 <div class="reviews-grid">
  <article class="review review--lead reveal"><blockquote>“Atendimento excelente das meninas do balcão… produtos de qualidade… sem falar na decoração que está espetacular.”</blockquote><div class="review-meta"><b>Sabrina Sampaio</b><small>Foursquare · 4 anos atrás</small></div></article>
  <article class="review reveal"><blockquote>“Os produtos de qualidade e fresquinho… A decoração é muito charmosa.”</blockquote><div class="review-meta"><b>Sabrina Sampaio</b><small>Restaurant Guru · 4 anos atrás</small></div></article>
  <article class="review reveal"><blockquote>“Bolos e tortas deliciosas em massa folheada.”</blockquote><div class="review-meta"><b>Fernanda Oliveira Brito</b><small>Foursquare · 9 anos atrás</small></div></article>
 </div>
 <div class="compact-rail-status" data-rail-status="reviews"><b>01</b><span>/ 03</span><i aria-hidden="true"></i><small>Arraste para ver outras avaliações</small></div>
 <div class="reviews-note reveal"><p>Experiências compartilhadas por clientes que passaram pela Paganelli.</p><a class="text-link" href="https://restaurantguru.com.br/Paganelli-Sao-Jose-do-Rio-Preto" target="_blank" rel="noopener">Ver avaliações ${svg('arrow')}</a></div>
</section>`;
export const guide=()=>`<section class="before-you-go construct" data-panel="pink">
 <div class="chapter reveal"><span>Antes de sair</span><b>Planeje sua visita</b></div>
 <div class="guide-head reveal"><p class="kicker">Tudo começa com uma boa escolha</p><h2>Escolha, encomende<br><em>e venha buscar.</em></h2><p>Fale diretamente com nossa equipe para conhecer a vitrine do dia e organizar sua encomenda.</p></div>
 <div class="guide-grid reveal">
  <article><b>01</b><h3>Conheça a vitrine</h3><p>Descubra os doces e salgados preparados para o dia e escolha seus favoritos.</p></article>
  <article><b>02</b><h3>Faça sua encomenda</h3><p>Converse com a equipe sobre sabores, tamanhos, antecedência e retirada.</p></article>
  <article><b>03</b><h3>Venha nos visitar</h3><p>Estamos na ${street}, na Vila Redentora, em São José do Rio&nbsp;Preto.</p></article>
  <article><b>04</b><h3>Fale com a Paganelli</h3><p>Ligue para tirar dúvidas e preparar cada detalhe da sua próxima ocasião.</p></article>
 </div>
 <div class="compact-rail-status light-status" data-rail-status="guide"><b>01</b><span>/ 04</span><i aria-hidden="true"></i><small>Arraste para ver mais</small></div>
</section>`;
export const visit=()=>`<section class="visit construct" id="visita">
 <div class="chapter reveal"><span>Capítulo 04</span><b>Visite</b></div>
 <div class="visit-grid">
  <div class="visit-copy reveal"><p class="kicker">Vila Redentora · São José do Rio&nbsp;Preto</p><h2>O caminho<br>mais curto até<br><em>a vitrine.</em></h2></div>
  <address class="address reveal"><span>Nosso endereço</span><b>${street}</b><p>Vila Redentora<br>São José do Rio&nbsp;Preto — SP<br>CEP ${postalCode}</p></address>
  <a class="map-card reveal" href="${maps}" target="_blank" rel="noopener noreferrer" aria-label="Abrir rota até a Confeitaria Paganelli no Google Maps"><span class="map-grid" aria-hidden="true"></span><span class="map-pin">${svg('pin')}</span><span class="map-copy"><small>COMO CHEGAR</small><b>Abra a rota até<br>a Paganelli</b><em>Google Maps ${svg('route')}</em></span></a>
  <div class="contact reveal"><span>Telefone</span><a href="${phone}">${phoneDisplay} ${svg('arrow')}</a><span>Instagram</span><a class="instagram-link" href="${instagram}" target="_blank" rel="noopener">@confeitariapaganelli ${svg('ig')}</a>${hasHours()?`<span>Horário</span><p class="hours">${hoursLines().join('<br>')}<b class="open-status" data-open-status hidden></b></p>`:''}</div>
 </div>
</section>`;
export const footer=()=>`<footer data-panel="pink"><div class="footer-brand"><img src="${LOGO}" alt="Paganelli Confeitaria" width="1876" height="462"></div><p>Confeitaria Paganelli · desde 1947<br>São José do Rio&nbsp;Preto — SP</p><a href="#inicio">Voltar ao início ${svg('arrow')}</a></footer>`;
