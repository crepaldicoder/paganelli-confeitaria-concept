import './style.css';

const PHONE='tel:'+['+55','17','3231','4174'].join('');
const MAPS='https://www.google.com/maps/place/Confeitaria+Paganelli/@-20.8203768,-49.3894545,17z/data=!4m6!3m5!1s0x94bdadbadbd0a8eb:0x25475b3bbd009d45!8m2!3d-20.8203768!4d-49.3894545!16s%2Fg%2F11q40g7yw_';
const INSTAGRAM='https://www.instagram.com/confeitariapaganelli/';
const WHATSAPP='https://wa.me/551732314174?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Paganelli.';
const paths={arrow:'M5 12h13m-5-5 5 5-5 5',phone:'M7.2 3.5 10 8 8.1 9.9c1.3 2.8 3.2 4.8 6 6.1l2-2 4.5 2.8c.5.3.6.9.4 1.4-.7 1.7-2.4 2.8-4.3 2.7C9.4 20.3 3.7 14.6 3.1 7.3 3 5.4 4 3.8 5.8 3.1c.5-.2 1.1 0 1.4.4Z',pin:'M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Zm-8 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',ig:'M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm4 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-1.5h.01',menu:'M4 8h16M4 16h16',close:'M6 6l12 12M18 6 6 18'};
const icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[n]}"/></svg>`;

const app=document.querySelector('#app');
app.innerHTML=`
<a class="skip" href="#main">Pular para o conteúdo</a>
<header class="site-header">
  <a class="brand" href="#inicio" aria-label="Paganelli, início"><img src="/images/logo-paganelli-static.svg" alt="Paganelli"></a>
  <nav class="desktop-nav" aria-label="Navegação principal"><a href="#vitrine">Vitrine</a><a href="#espaco">O espaço</a><a href="#historia">Desde 1947</a><a href="#visite">Visite</a></nav>
  <a class="header-call" href="${PHONE}">${icon('phone')}<span>Ligar agora</span></a>
  <button class="menu-button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menu">${icon('menu')}<span>Menu</span></button>
</header>
<div class="mobile-menu" id="mobile-menu" aria-hidden="true" inert>
  <div class="menu-top"><img src="/images/logo-paganelli-static.svg" alt=""><button class="menu-close" aria-label="Fechar menu">${icon('close')}</button></div>
  <nav aria-label="Navegação móvel"><a href="#vitrine"><small>01</small>Vitrine</a><a href="#espaco"><small>02</small>O espaço</a><a href="#historia"><small>03</small>Desde 1947</a><a href="#visite"><small>04</small>Visite</a></nav>
  <a class="menu-route" href="${MAPS}" target="_blank" rel="noopener">Rua Ondina, 334 ${icon('arrow')}</a>
</div>
<main id="main">
<section class="hero" id="inicio">
  <div class="hero-photo"><img src="/images/hero-folhado.png" alt="Folhado da Paganelli com creme, morango e brilho de geleia" fetchpriority="high"></div>
  <div class="hero-grid" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
  <div class="hero-copy">
    <p class="hero-kicker">Confeitaria · São José do Rio Preto</p>
    <h1><span>Escolha</span><span>com os</span><strong>olhos.</strong></h1>
    <p>Desde 1947, um endereço onde a vitrine faz parte da memória da cidade.</p>
    <div class="hero-actions"><a class="button button-pink" href="#vitrine">Ver a vitrine ${icon('arrow')}</a><a class="button button-light" href="${MAPS}" target="_blank" rel="noopener">Abrir rota ${icon('pin')}</a></div>
  </div>
  <div class="hero-window"><img src="/images/fachada-real.jpg" alt="Fachada rosa e azul da Confeitaria Paganelli"><span>Rua Ondina, 334</span></div>
  <a class="scroll-cue" href="#vitrine"><span></span>Entre pela vitrine</a>
</section>

<section class="first-look" id="vitrine">
  <header class="section-intro reveal"><p>O que chama primeiro</p><h2>Camadas, creme,<br><span>fruta e cor.</span></h2><div><p>A seleção muda. O desejo começa antes mesmo do pedido.</p><a href="${WHATSAPP}" target="_blank" rel="noopener">Consultar a vitrine de hoje ${icon('arrow')}</a></div></header>
  <div class="pastry-stage">
    <figure class="pastry-main image-reveal"><img src="/images/mil-folhas-real.jpg" alt="Mil-folhas da vitrine Paganelli"><figcaption><b>01</b><span>Folhado</span></figcaption></figure>
    <figure class="pastry-side image-reveal"><img src="/images/torta-frutas-reais.jpg" alt="Torta com frutas da vitrine Paganelli"><figcaption><b>02</b><span>Fruta</span></figcaption></figure>
    <p class="vertical-note">Feito para olhar de perto</p>
  </div>
</section>

<section class="window-story" aria-label="Detalhes da vitrine">
  <div class="window-copy reveal"><span>Uma aproximação</span><h2>A vitrine<br>não entrega tudo<br>de uma vez.</h2><p>Primeiro a cor. Depois a textura. Então, a escolha.</p></div>
  <div class="window-sticky">
    <div class="blue-frame" aria-hidden="true"><i></i><i></i></div>
    <figure class="window-image"><img src="/images/vitrine-editorial.png" alt="Vitrine com folhados em direção de arte inspirada no espaço Paganelli"><figcaption>Direção de arte inspirada no espaço real</figcaption></figure>
    <div class="detail-label d1"><b>01</b><span>massa</span></div><div class="detail-label d2"><b>02</b><span>creme</span></div><div class="detail-label d3"><b>03</b><span>fruta</span></div>
  </div>
</section>

<section class="space" id="espaco">
  <header class="space-title reveal"><p>Um lugar que você reconhece</p><h2>Rosa por dentro.<br><span>Rio Preto ao redor.</span></h2></header>
  <div class="space-mosaic">
    <figure class="space-a image-reveal"><img src="/images/interior-editorial.png" alt="Salão rosa e madeira em direção de arte inspirada na Paganelli"><figcaption>Atmosfera · direção de arte</figcaption></figure>
    <figure class="space-b image-reveal"><img src="/images/interior-real.jpg" alt="Registros reais da vitrine, salão e parede de flores da Paganelli"><figcaption>O espaço · registro real</figcaption></figure>
    <figure class="space-c image-reveal"><img src="/images/ambiente-luzes-editorial.png" alt="Parede floral iluminada em direção de arte inspirada na Paganelli"><figcaption>Luz e flor · direção de arte</figcaption></figure>
  </div>
  <div class="mobile-gallery-status" aria-live="polite"><b>1</b><span>de 3</span><i></i><small>Arraste para conhecer o espaço</small></div>
</section>

<section class="heritage" id="historia">
  <div class="year" aria-label="Desde 1947"><span>19</span><span>47</span></div>
  <div class="heritage-copy reveal"><p>Desde 1947</p><h2>Um endereço que<br>atravessa gerações.</h2><p>Na Rua Ondina, a Paganelli segue fazendo parte de encontros, celebrações e escolhas cotidianas em São José do Rio Preto.</p><object class="animated-signature" data="/images/paganelli-escrita-revisada.svg" type="image/svg+xml" aria-label="Animação do lettering Paganelli"><img src="/images/logo-paganelli-static.svg" alt="Paganelli"></object></div>
</section>

<section class="visit" id="visite">
  <figure class="visit-photo image-reveal"><img src="/images/fachada-real.jpg" alt="Fachada da Confeitaria Paganelli"><figcaption>Rua Ondina · Vila Redentora</figcaption></figure>
  <div class="visit-panel">
    <p class="visit-kicker">Seu próximo destino</p><h2>Até a<br><span>vitrine.</span></h2>
    <address><small>Confeitaria Paganelli</small><strong>Rua Ondina, 334</strong><span>Vila Redentora<br>São José do Rio Preto — SP</span></address>
    <div class="visit-actions"><a class="visit-primary" href="${MAPS}" target="_blank" rel="noopener">Abrir rota ${icon('pin')}</a><a href="${PHONE}">Ligar (17) 3231-4174 ${icon('phone')}</a><a href="${INSTAGRAM}" target="_blank" rel="noopener">Instagram ${icon('ig')}</a></div>
  </div>
</section>
</main>
<footer><a href="#inicio"><img src="/images/logo-paganelli-static.svg" alt="Paganelli"></a><p>Confeitaria Paganelli · desde 1947<br>São José do Rio Preto — SP</p><div><a href="${PHONE}">(17) 3231-4174</a><a href="${INSTAGRAM}" target="_blank" rel="noopener">@confeitariapaganelli</a></div></footer>
<a class="whatsapp" href="${WHATSAPP}" target="_blank" rel="noopener" aria-label="Falar com a Paganelli pelo WhatsApp"><span>WhatsApp</span>${icon('phone')}</a>`;

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced) document.documentElement.classList.add('motion-ready');
requestAnimationFrame(()=>document.body.classList.add('loaded'));

const revealTargets=[...document.querySelectorAll('.reveal,.image-reveal')];
if(reduced) revealTargets.forEach(el=>el.classList.add('visible'));
else {
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -6%'});
  revealTargets.forEach(el=>io.observe(el));
  const failOpen=()=>revealTargets.forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight*1.1||r.bottom<0||scrollY+innerHeight>document.documentElement.scrollHeight-20)el.classList.add('visible')});
  addEventListener('scroll',failOpen,{passive:true}); failOpen();
  setTimeout(()=>revealTargets.forEach(el=>el.classList.add('visible')),1400);
}

const header=document.querySelector('.site-header');
addEventListener('scroll',()=>header.classList.toggle('compact',scrollY>40),{passive:true});

const trigger=document.querySelector('.menu-button'), menu=document.querySelector('.mobile-menu'), closer=document.querySelector('.menu-close');
const menuLinks=[...menu.querySelectorAll('a,button')];
function openMenu(){menu.inert=false;menu.setAttribute('aria-hidden','false');menu.classList.add('open');trigger.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');setTimeout(()=>closer.focus(),80)}
function closeMenu(returnFocus=true){menu.classList.remove('open');menu.setAttribute('aria-hidden','true');menu.inert=true;trigger.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');if(returnFocus)trigger.focus()}
trigger.addEventListener('click',openMenu);closer.addEventListener('click',()=>closeMenu());menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu(false)));
document.addEventListener('keydown',e=>{if(!menu.classList.contains('open'))return;if(e.key==='Escape')closeMenu();if(e.key==='Tab'){const first=menuLinks[0],last=menuLinks.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});

const gallery=document.querySelector('.space-mosaic'), status=document.querySelector('.mobile-gallery-status');
if(gallery&&status){const cards=[...gallery.children],num=status.querySelector('b'),bar=status.querySelector('i');let ticking=false;const update=()=>{const center=gallery.scrollLeft+gallery.clientWidth/2;let best=0,dist=Infinity;cards.forEach((c,i)=>{const d=Math.abs(c.offsetLeft+c.offsetWidth/2-center);if(d<dist){dist=d;best=i}});num.textContent=best+1;bar.style.setProperty('--position',`${((best+1)/cards.length)*100}%`);ticking=false};gallery.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});update()}
