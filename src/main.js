import './style.css';
const PHONE='tel:+551732314174';
const MAPS='https://www.google.com/maps/place/Confeitaria+Paganelli/@-20.8203768,-49.3894545,17z/data=!4m6!3m5!1s0x94bdadbadbd0a8eb:0x25475b3bbd009d45!8m2!3d-20.8203768!4d-49.3894545!16s%2Fg%2F11q40g7yw_';
const IG='https://www.instagram.com/confeitariapaganelli/';
const REVIEW_SOURCE='https://restaurantguru.com.br/Paganelli-Sao-Jose-do-Rio-Preto';
const svg=(d)=>`<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const arrow=svg('<path d="M4 12h15M14 6l6 6-6 6"/>');
const phone=svg('<path d="M7 3.5 10 8 8.2 9.8c1.4 2.9 3.2 4.7 6 6.1l2-1.9 4.4 2.8c.5.3.7.9.4 1.4-.8 1.8-2.4 2.8-4.3 2.7C9.4 20.3 3.7 14.6 3.1 7.3 3 5.4 4 3.8 5.8 3.1c.5-.2 1 0 1.2.4Z"/>');
const rose=`<svg class="rose-line" viewBox="0 0 180 180" aria-hidden="true"><path pathLength="1" d="M91 155c-3-38-1-69 8-91M91 112c-24-5-35-20-37-37 23-2 39 11 43 29M97 84c16-22 37-27 55-20-4 24-21 38-48 38M99 66c-23-3-35-17-32-33 17-8 34 4 39 22M106 54c9-18 24-26 39-20 4 16-7 31-32 38M90 154c-13-10-22-13-32-11M91 142c14-11 28-14 40-9"/></svg>`;
const split=(text)=>[...text].map((c,i)=>`<span style="--i:${i}">${c===' '?'&nbsp;':c}</span>`).join('');

document.querySelector('#app').innerHTML=`
<a class="skip" href="#main">Pular para o conteúdo</a>
<div class="loader" aria-hidden="true"><span class="loader-script">Paganelli</span><i></i></div>
<header class="topbar">
 <a class="logo" href="#inicio"><span>P</span><b>Paganelli</b><small>Rio Preto</small></a>
 <nav class="desktop-nav" aria-label="Principal"><a href="#casa">A casa</a><a href="#vitrine">Vitrine</a><a href="#avaliacoes">Avaliações</a><a href="#visite">Visite</a></nav>
 <a class="call-top" href="${PHONE}">${phone}<span>Ligar</span></a>
 <button class="menu-trigger" aria-expanded="false" aria-controls="mobile-menu"><span>Menu</span><i></i><i></i></button>
</header>
<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
 <button class="menu-close" aria-label="Fechar menu"><span>Fechar</span><i>×</i></button>${rose}
 <nav><a href="#casa">A casa</a><a href="#vitrine">Vitrine</a><a href="#avaliacoes">Avaliações</a><a href="#visite">Visite</a></nav>
 <p>Rua Ondina, 334 · Vila Redentora</p>
</div>
<main id="main">
<section class="hero" id="inicio">
 <div class="hero-photo photo-wipe"><img src="/images/fachada-real.jpg" alt="Fachada rosa e azul da Confeitaria Paganelli, fotografada em novembro de 2025" fetchpriority="high"><p>Fachada real · Google Maps · nov. 2025</p></div>
 <div class="hero-copy"><p class="eyebrow reveal">Confeitaria · Vila Redentora · Rio Preto</p><h1 class="write-title" aria-label="A casa mais rosa da cidade"><span class="write-line">${split('A casa mais')}</span><span class="write-line script">${split('rosa')}</span><span class="write-line last">${split('da cidade.')}</span></h1><p class="hero-lead reveal">Por fora, azul-ciano e rosa. Por dentro, flores, vitrines acesas e uma história que o perfil da casa situa em 1947.</p><div class="hero-actions reveal"><a class="btn" href="${PHONE}">${phone} Falar com a Paganelli</a><a class="underlink" href="#casa">Entrar na casa ${arrow}</a></div></div>
 <div class="scribble">${rose}</div><div class="scroll-note"><i></i><span>Role para entrar</span></div>
</section>
<section class="score-strip"><div><span>AVALIAÇÃO NO GOOGLE</span><b class="count" data-target="4.7">0,0</b><div class="stars" aria-label="4,7 de 5 estrelas">★★★★★</div></div><p>Uma reputação construída no balcão — e que precisa ocupar o centro da experiência digital.</p><a href="${MAPS}" target="_blank" rel="noopener">Ver perfil público ${arrow}</a></section>
<section class="house" id="casa">
 <div class="section-index reveal"><span>01</span><p>A casa real<br>como direção de arte</p></div>
 <div class="house-title"><p class="eyebrow reveal">Não é rosa como detalhe. É rosa como mundo.</p><h2 class="mask-title">Uma confeitaria<br>que você <em>reconhece</em><br>antes de entrar.</h2></div>
 <figure class="interior-main photo-wipe"><img src="/images/interior-real.jpg" alt="Interior rosa da Paganelli com parede de flores, mobiliário e vitrines"><figcaption>Interior real · parede floral, mobiliário rosa e luz quente</figcaption></figure>
 <div class="palette reveal"><span style="--c:#f4a6b9">rosa-concha</span><span style="--c:#ed4f88">rosa-vivo</span><span style="--c:#08bde8">azul-fachada</span><span style="--c:#f7e8da">creme</span></div>
 <div class="house-copy reveal">${rose}<h3>Da fachada ao balcão, a identidade já existe.</h3><p>O trabalho do site é amplificar o que o espaço entrega: cor sem timidez, floral sem delicadeza excessiva e uma vitrine que funciona como palco.</p></div>
</section>
<section class="vitrine" id="vitrine">
 <div class="vitrine-heading"><div class="section-index light reveal"><span>02</span><p>Produtos reais<br>em cena</p></div><h2 class="mask-title">Camadas,<br><em>frutas</em> e flores.</h2><p class="reveal">As fotos públicas mostram a recorrência da massa folhada, frutas, creme e vitrines iluminadas. A disponibilidade deve ser confirmada com a casa.</p></div>
 <div class="product-stage">
  <figure class="product-big photo-wipe"><img src="/images/torta-frutas-reais.jpg" alt="Torta folhada com frutas vermelhas em frente a parede floral"><figcaption>Torta folhada · imagem pública do estabelecimento</figcaption></figure>
  <figure class="product-small photo-wipe"><img src="/images/mil-folhas-real.jpg" alt="Torta mil-folhas sobre boleira rosa"><figcaption>Mil-folhas · imagem pública do estabelecimento</figcaption></figure>
  <div class="orbit-label"><span>vitrine</span><i>•</i><span>frescor</span><i>•</i><span>camadas</span></div>
 </div>
 <div class="consult reveal"><small>A seleção muda. A vontade não.</small><h3>Consulte a vitrine<br>antes de escolher.</h3><a class="btn cream" href="${PHONE}">${phone} (17) 3231-4174</a></div>
</section>
<section class="reviews" id="avaliacoes">
 <div class="reviews-top"><div class="section-index reveal"><span>03</span><p>O que dizem<br>sobre a casa</p></div><div><p class="eyebrow reveal">Avaliações públicas, sem depoimentos inventados</p><h2 class="mask-title">É no comentário<br>que a confiança <em>aparece.</em></h2></div></div>
 <div class="rating-wall reveal"><div class="rating-number"><b>4,7</b><div class="stars">★★★★★</div><span>Nota exibida no Google Maps<br>na data da consulta</span></div><p>Atendimento, frescor, decoração e massa folhada aparecem como os temas mais concretos nas avaliações públicas encontradas.</p></div>
 <div class="review-list">
  <article class="review-card reveal"><div class="stars" aria-label="avaliação positiva">★★★★★</div><blockquote>“Atendimento excelente das meninas do balcão… produtos de qualidade… sem falar na decoração que está espetacular.”</blockquote><footer><b>Sabrina Sampaio</b><span>Foursquare · 4 anos atrás</span></footer></article>
  <article class="review-card reveal"><div class="stars" aria-label="avaliação positiva">★★★★★</div><blockquote>“Os produtos de qualidade e fresquinho… A decoração é muito charmosa.”</blockquote><footer><b>Sabrina Sampaio</b><span>Restaurant Guru · 4 anos atrás</span></footer></article>
  <article class="review-card reveal"><div class="stars" aria-label="avaliação positiva">★★★★★</div><blockquote>“Bolos e tortas deliciosas em massa folheada.”</blockquote><footer><b>Fernanda Oliveira Brito</b><span>Foursquare · 9 anos atrás</span></footer></article>
 </div>
 <div class="reviews-source reveal"><p>Comentários reproduzidos parcialmente, mantendo sentido e autoria. São avaliações antigas encontradas em agregador público; a nota atual é a exibida pelo Maps.</p><a href="${REVIEW_SOURCE}" target="_blank" rel="noopener">Ver fonte das avaliações ${arrow}</a></div>
</section>
<section class="evidence" id="fontes">
 <div class="evidence-head"><div class="section-index light reveal"><span>04</span><p>Caderno<br>de evidências</p></div><div><p class="eyebrow reveal">O que sabemos — e o que não fingimos saber</p><h2 class="mask-title">Beleza com<br><em>procedência.</em></h2></div></div>
 <div class="evidence-grid reveal">
  <article><b>01</b><span>Atividade recente</span><h3>Fachada registrada em novembro de 2025</h3><p>A fotografia mais recente encontrada no Google Maps mostra a fachada instalada e identificada. O perfil também apresentou status de funcionamento no dia da consulta, em setembro de 2026. Esses dois sinais foram cruzados antes da escolha do negócio.</p><small>Fonte: Google Maps</small></article>
  <article><b>02</b><span>Identidade física</span><h3>Rosa, azul-ciano, flores e luz quente</h3><p>Fachada, interior, mobiliário, piso, parede floral, rosas em relevo e vitrines foram observados nas imagens públicas. A paleta desta versão vem desses materiais reais; não foi escolhida por associação genérica com confeitaria.</p><small>Fontes: Google Maps e Restaurant Guru</small></article>
  <article><b>03</b><span>Produtos observados</span><h3>Massa folhada, frutas, creme e vitrine</h3><p>Esses elementos aparecem nas fotografias públicas e nas avaliações encontradas. Ainda assim, as imagens não garantem disponibilidade atual, tamanho, receita, ingredientes ou preço. A seleção do dia deve ser consultada diretamente.</p><small>Fonte: acervo público do estabelecimento</small></article>
  <article><b>04</b><span>Reputação</span><h3>Nota atual e comentários antigos, separados</h3><p>A nota 4,7 é a exibida pelo Google Maps na consulta. Os trechos de comentários vêm de Foursquare e Restaurant Guru e são identificados como antigos. A página não mistura a data da nota agregada com a idade dos depoimentos.</p><small>Fontes: Google Maps, Foursquare e Restaurant Guru</small></article>
  <article><b>05</b><span>Contato e rota</span><h3>Endereço e telefone vêm do perfil atual</h3><p>Rua Ondina, 334 e o telefone exibido na página foram obtidos no Maps. Um diretório apresentou endereço e contato divergentes; esses dados não foram utilizados. Para feriados e mudanças excepcionais, ligar antes continua sendo a opção segura.</p><small>Fonte prioritária: Google Maps</small></article>
  <article><b>06</b><span>Limites do conceito</span><h3>Sem preço, cardápio ou promessa inventada</h3><p>Esta proposta não afirma entrega, reserva, formas de pagamento, sabores disponíveis, prazos de encomenda ou horários completos. Também não apresenta as imagens como ensaio oficial. Tudo que depende da operação permanece no canal direto da confeitaria.</p><small>Política editorial desta demonstração</small></article>
 </div>
 <div class="evidence-cta reveal"><p>Quer saber o que está na vitrine hoje?</p><a class="btn cream" href="${PHONE}">${phone} Consultar diretamente</a></div>
</section>
<section class="visit" id="visite">
 <div class="visit-photo photo-wipe"><img src="/images/vitrine-real.jpg" alt="Vitrine e salão rosa da Confeitaria Paganelli"></div>
 <div class="visit-copy"><p class="eyebrow reveal">Uma casa para ver de perto</p><h2 class="mask-title">Entre pelo azul.<br>Fique pelo <em>rosa.</em></h2><address><span>Rua Ondina, 334</span><br>Vila Redentora · São José do Rio Preto — SP</address><div class="visit-actions"><a class="btn cyan" href="${MAPS}" target="_blank" rel="noopener">Abrir rota ${arrow}</a><a class="underlink" href="${IG}" target="_blank" rel="noopener">Instagram ${arrow}</a></div></div>
 ${rose}
</section>
</main>
<footer class="site-footer"><div class="logo inverted"><span>P</span><b>Paganelli</b></div><p>Conceito independente criado a partir de fontes públicas.<br>Não é o site oficial do estabelecimento.</p><a href="#inicio">Voltar ao topo ↑</a></footer>`;

const menu=document.querySelector('.mobile-menu'),trigger=document.querySelector('.menu-trigger'),close=document.querySelector('.menu-close');menu.inert=true;
const foc=()=>[close,...menu.querySelectorAll('a')];
function openMenu(){menu.inert=false;menu.classList.add('open');menu.setAttribute('aria-hidden','false');trigger.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');setTimeout(()=>close.focus(),100)}
function closeMenu(){menu.classList.remove('open');menu.setAttribute('aria-hidden','true');menu.inert=true;trigger.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');trigger.focus()}
trigger.onclick=openMenu;close.onclick=closeMenu;menu.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=closeMenu);document.addEventListener('keydown',e=>{if(!menu.classList.contains('open'))return;if(e.key==='Escape')closeMenu();if(e.key==='Tab'){const f=foc();if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===f.at(-1)){e.preventDefault();f[0].focus()}}});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
window.addEventListener('load',()=>setTimeout(()=>document.body.classList.add('loaded'),120));
if(reduced){document.body.classList.add('loaded');document.querySelectorAll('.reveal,.mask-title,.photo-wipe').forEach(e=>e.classList.add('visible'));document.querySelector('.count').textContent='4,7'}else{
 const io=new IntersectionObserver(entries=>entries.forEach(({isIntersecting,target})=>{if(!isIntersecting)return;target.classList.add('visible');if(target.classList.contains('count')){let n=0;const end=47;const tick=()=>{n+=1;target.textContent=(n/10).toFixed(1).replace('.',',');if(n<end)requestAnimationFrame(tick)};tick()}io.unobserve(target)}),{threshold:.08});document.querySelectorAll('.reveal,.count').forEach(e=>io.observe(e));
 const masked=[...document.querySelectorAll('.mask-title,.photo-wipe')];const checkMasked=()=>masked.forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight*.96&&r.bottom>0)el.classList.add('visible')});checkMasked();addEventListener('scroll',checkMasked,{passive:true});
 let ticking=false;addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{document.documentElement.style.setProperty('--scroll',scrollY);ticking=false})},{passive:true});
}
