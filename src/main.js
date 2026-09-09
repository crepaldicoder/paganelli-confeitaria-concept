import './style.css';
import './desktop-rework.css';
import './refinement.css';
import './component-integration.css';

const phone='tel:+551732314174';
const maps='https://www.google.com/maps/place/Confeitaria+Paganelli/@-20.8203768,-49.3894545,17z/data=!4m6!3m5!1s0x94bdadbadbd0a8eb:0x25475b3bbd009d45!8m2!3d-20.8203768!4d-49.3894545!16s%2Fg%2F11q40g7yw_';
const instagram='https://www.instagram.com/confeitariapaganelli/';
const whatsapp='https://wa.me/551732314174?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Paganelli.';
const icon=(name)=>({arrow:'<path d="M5 12h14M14 6l6 6-6 6"/>',phone:'<path d="M7.2 3.5 10 8 8.1 9.9c1.3 2.8 3.2 4.8 6 6.1l2-2 4.5 2.8c.5.3.6.9.4 1.4-.7 1.7-2.4 2.8-4.3 2.7C9.4 20.3 3.7 14.6 3.1 7.3 3 5.4 4 3.8 5.8 3.1c.5-.2 1.1 0 1.4.4Z"/>',pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',whatsapp:'<path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.4l1.3-4.7A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.3 7.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5 1 1.3 1.8 2.3 2.3.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.3-.7 1.7-.5.5-1.3.8-2.1.7-1.2-.1-2.8-.7-4.6-2.3-2.2-2-3.1-4.3-3.2-5.2 0-.6.2-1 .5-1.3Z"/>',route:'<path d="M5 19c0-3 2-4 4-4s4-1 4-4 2-5 6-5"/><path d="m16 3 3 3-3 3"/><circle cx="5" cy="19" r="2"/>'}[name]);
const svg=(name)=>`<svg viewBox="0 0 24 24" aria-hidden="true">${icon(name)}</svg>`;
const ratingStars=`<span class="rating-stars" aria-label="5 de 5 estrelas">${Array.from({length:5},()=>'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>').join('')}</span>`;

document.querySelector('#app').innerHTML=`
<a class="skip" href="#conteudo">Pular para o conteúdo</a>
<div class="build-intro" aria-hidden="true"><div class="intro-panel intro-panel--left"></div><div class="intro-panel intro-panel--right"></div><div class="intro-stage"><span class="intro-index">SÃO JOSÉ DO RIO PRETO · 1947</span><div class="intro-writing"><object class="intro-logo-revised" data="/images/paganelli-escrita-revisada.svg" type="image/svg+xml" tabindex="-1"><img src="/images/logo-paganelli-static.svg" alt=""></object></div><p>uma receita construída<br>traço por traço</p></div></div><aside class="scroll-progress recipe-progress" aria-hidden="true"><span class="recipe-progress__label">Início</span><i></i><span class="recipe-progress__dots"><b></b><b></b><b></b><b></b><b></b></span></aside>
<header class="topbar">
  <a class="brand" href="#inicio" aria-label="Paganelli, início"><img class="literal-logo" src="/images/logo-paganelli.svg" alt=""></a>
  <nav class="desktop-nav" aria-label="Principal"><a href="#oficio">O ofício</a><a href="#mesa">Da vitrine</a><a href="#avaliacoes">Avaliações</a><a href="#visita">Visite</a></nav>
  <a class="top-cta" href="${phone}">${svg('phone')} Ligar agora</a>
  <button class="menu-trigger" aria-expanded="false" aria-controls="menu"><span>Menu</span><i></i><i></i></button>
</header>
<div class="mobile-menu" id="menu" aria-hidden="true">
 <button class="menu-close" aria-label="Fechar menu"><span>Fechar</span><i aria-hidden="true"></i></button>
 <nav aria-label="Navegação móvel"><a href="#inicio">01 — Início</a><a href="#oficio">02 — O ofício</a><a href="#mesa">03 — Da vitrine</a><a href="#avaliacoes">04 — Avaliações</a><a href="#visita">05 — Visite</a></nav>
 <p>Rua Ondina, 334<br>Vila Redentora · Rio Preto</p>
</div>
<a class="whatsapp-float" href="${whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Paganelli pelo WhatsApp"><span>Fale no WhatsApp</span>${svg('whatsapp')}</a>
<main id="conteudo">
<section class="hero" id="inicio">
 <div class="hero-copy">
  <p class="eyebrow reveal">Confeitaria em São José do Rio Preto · desde 1947</p>
  <h1 class="hero-title"><span>Receitas</span><span>que o tempo</span><em>aperfeiçoa.</em></h1>
  <p class="hero-intro reveal">Há gerações, a Paganelli transforma o fazer artesanal, a vitrine generosa e o prazer de receber em uma tradição de Rio Preto.</p>
  <div class="hero-actions reveal"><a class="button primary" href="${phone}">${svg('phone')} Falar com a confeitaria</a><a class="text-link" href="#oficio">Conheça nossa história ${svg('arrow')}</a></div>
  <div class="hero-facts reveal"><span><b>4,7</b> avaliação no Google</span><span><b>1947</b> tradição em Rio Preto</span></div>
  <div class="hero-signature"><img class="literal-logo" src="/images/logo-paganelli.svg" alt=""></div>
 </div>
 <figure class="hero-image image-build"><img src="/images/hero-folhado.png" alt="Massa folhada com creme e frutas em uma bancada de confeitaria" fetchpriority="high"><figcaption>Delicadeza em cada camada</figcaption></figure>
 <div class="stamp" aria-hidden="true"><span>feito com tempo</span><b>1947</b><small>RIO PRETO</small></div>
</section>
<section class="ribbon" aria-label="Valores"><div class="ribbon-track"><span>massa folhada</span><i aria-hidden="true"></i><span>receitas de família</span><i aria-hidden="true"></i><span>produção artesanal</span><i aria-hidden="true"></i><span>memória afetiva</span><i aria-hidden="true"></i><span>massa folhada</span><i aria-hidden="true"></i><span>receitas de família</span></div></section>
<section class="manifesto construct" id="oficio">
 <div class="chapter reveal"><span>Capítulo 01</span><b>O ofício</b></div>
 <div class="manifesto-copy reveal"><p class="kicker">Nem toda receita começa no papel.</p><h2>Algumas começam <em>nas mãos.</em></h2><p>Desde 1947, a Paganelli faz parte da história de Rio Preto. Uma tradição construída com cuidado, repetição e aquele olhar atento que reconhece o ponto certo de cada receita.</p></div>
 <figure class="craft-image reveal image-build"><img src="/images/maos-oficio.png" alt="Fachada rosa e azul da Confeitaria Paganelli"><figcaption><span>01</span> Um endereço que faz parte da cidade</figcaption></figure>
 <div class="recipe-note reveal"><span>UMA BOA RECEITA PEDE</span><ul><li><b>01</b> matéria-prima</li><li><b>02</b> repetição e cuidado</li><li><b>03</b> tempo de forno</li><li><b>04</b> gente à mesa</li></ul></div>
</section>
<section class="quote-band reveal construct"><p>“Tradição não é ficar parada.<br><em>É saber o que não pode se perder.</em>”</p><span>— Paganelli, desde 1947</span></section>
<section class="atmosphere construct" id="atmosfera">
 <div class="chapter reveal"><span>Interlúdio</span><b>Por dentro</b></div>
 <div class="atmosphere-head reveal"><p class="kicker">Matéria, cor e memória</p><h2>Uma atmosfera<br><em>que também alimenta.</em></h2><p>Um espaço pensado para acolher, escolher com calma e transformar uma visita à confeitaria em parte do dia.</p></div>
 <div class="atmosphere-rail" role="region" aria-label="Galeria da confeitaria" tabindex="0">
  <figure class="atmosphere-card image-build"><div class="media-frame"><img src="/images/interior-editorial.png" alt="Salão da Paganelli com mobiliário de madeira, teto rosa e iluminação quente"></div><figcaption><span>01</span><div><b>O salão como cenário</b><small>madeira, rosa e luz natural</small></div></figcaption></figure>
  <figure class="atmosphere-card image-build"><div class="media-frame"><img src="/images/sala-rosa-editorial.png" alt="Segundo ângulo do salão rosa da Paganelli com mesas e balcão"></div><figcaption><span>02</span><div><b>Rosa em todos os detalhes</b><small>do piso ao balcão da confeitaria</small></div></figcaption></figure>
  <figure class="atmosphere-card image-build"><div class="media-frame"><img src="/images/ambiente-luzes-editorial.png" alt="Parede floral da Paganelli iluminada por lâmpadas amarelas"></div><figcaption><span>03</span><div><b>Luzes sobre o jardim</b><small>a parede floral em luz âmbar</small></div></figcaption></figure>
  <figure class="atmosphere-card image-build"><div class="media-frame"><img src="/images/vitrine-editorial.png" alt="Vitrine real com folhados de limão da Paganelli"></div><figcaption><span>04</span><div><b>A vitrine como primeiro convite</b><small>folhados preparados para o dia</small></div></figcaption></figure>
 </div>
 <div class="rail-status" data-rail="atmosphere"><div class="rail-dots"><button class="active" aria-label="Ver imagem 1" aria-selected="true"></button><button aria-label="Ver imagem 2" aria-selected="false"></button><button aria-label="Ver imagem 3" aria-selected="false"></button><button aria-label="Ver imagem 4" aria-selected="false"></button></div><p><b>01</b> / 04 <span>O salão como cenário</span></p><small>Arraste para o lado</small></div>
</section>
<section class="table-section construct" id="mesa">
 <div class="chapter light reveal"><span>Capítulo 02</span><b>Da vitrine</b></div>
 <div class="table-head reveal"><h2>Do doce ao salgado,<br><em>uma mesa inteira.</em></h2><p>Receitas para o café, para a sobremesa, para celebrar e para levar. Consulte a seleção do dia e encontre o sabor certo para cada ocasião.</p></div>
 <figure class="table-image reveal image-build"><img src="/images/torta-isolada.png" alt="Torta de frutas da Paganelli vista de cima"></figure>
 <div class="daily-card reveal"><small>A ESCOLHA CERTA É A DE HOJE</small><h3>Consulte a vitrine<br>e faça sua encomenda.</h3><a class="button paper" href="${phone}">${svg('phone')} (17) 3231-4174</a></div>
</section>
<section class="heritage construct">
 <div class="heritage-number reveal"><small>Uma história desde</small><b>19<span>47</span></b></div>
 <div class="heritage-copy reveal"><h2>Uma tradição presente<br>na memória de Rio Preto.</h2><p>Décadas de receitas, encontros e celebrações fizeram da Paganelli um endereço querido por diferentes gerações.</p><div class="rules"><span>Feito com cuidado</span><span>Receitas que permanecem</span><span>Gente à mesa</span></div></div>
</section>
<section class="reviews construct" id="avaliacoes">
 <div class="chapter reveal"><span>Capítulo 03</span><b>Avaliações</b></div>
 <div class="reviews-head reveal"><p class="kicker">Quem conhece, recomenda</p><h2>O que fica<br><em>depois da visita.</em></h2><div class="review-score"><b>4,7</b>${ratingStars}<small>avaliação no Google</small></div></div>
 <div class="reviews-grid">
  <article class="review review--lead reveal">${ratingStars}<blockquote>“Atendimento excelente das meninas do balcão… produtos de qualidade… sem falar na decoração que está espetacular.”</blockquote><div class="review-meta"><b>Sabrina Sampaio</b><small>Foursquare · 4 anos atrás</small></div></article>
  <article class="review reveal">${ratingStars}<blockquote>“Os produtos de qualidade e fresquinho… A decoração é muito charmosa.”</blockquote><div class="review-meta"><b>Sabrina Sampaio</b><small>Restaurant Guru · 4 anos atrás</small></div></article>
  <article class="review reveal">${ratingStars}<blockquote>“Bolos e tortas deliciosas em massa folheada.”</blockquote><div class="review-meta"><b>Fernanda Oliveira Brito</b><small>Foursquare · 9 anos atrás</small></div></article>
 </div>
 <div class="compact-rail-status" data-rail-status="reviews"><b>01</b><span>/ 03</span><i aria-hidden="true"></i><small>Arraste para ver outras avaliações</small></div>
 <div class="reviews-note reveal"><p>Experiências compartilhadas por clientes que passaram pela Paganelli.</p><a class="text-link" href="https://restaurantguru.com.br/Paganelli-Sao-Jose-do-Rio-Preto" target="_blank" rel="noopener">Ver avaliações ${svg('arrow')}</a></div>
</section>
<section class="before-you-go construct">
 <div class="chapter reveal"><span>Antes de sair</span><b>Planeje sua visita</b></div>
 <div class="guide-head reveal"><p class="kicker">Tudo começa com uma boa escolha</p><h2>Escolha, encomende<br><em>e venha buscar.</em></h2><p>Fale diretamente com nossa equipe para conhecer a vitrine do dia e organizar sua encomenda.</p></div>
 <div class="guide-grid reveal">
  <article><b>01</b><h3>Conheça a vitrine</h3><p>Descubra os doces e salgados preparados para o dia e escolha seus favoritos.</p></article>
  <article><b>02</b><h3>Faça sua encomenda</h3><p>Converse com a equipe sobre sabores, tamanhos, antecedência e retirada.</p></article>
  <article><b>03</b><h3>Venha nos visitar</h3><p>Estamos na Rua Ondina, 334, na Vila Redentora, em São José do Rio Preto.</p></article>
  <article><b>04</b><h3>Fale com a Paganelli</h3><p>Ligue para tirar dúvidas e preparar cada detalhe da sua próxima ocasião.</p></article>
 </div>
 <div class="compact-rail-status light-status" data-rail-status="guide"><b>01</b><span>/ 04</span><i aria-hidden="true"></i><small>Arraste para ver mais</small></div>
</section>
<section class="visit construct" id="visita">
 <div class="chapter reveal"><span>Capítulo 04</span><b>Visite</b></div>
 <div class="visit-grid">
  <div class="visit-copy reveal"><p class="kicker">Vila Redentora · São José do Rio Preto</p><h2>O caminho<br>mais curto até<br><em>a vitrine.</em></h2></div>
  <address class="address reveal"><span>Nosso endereço</span><b>Rua Ondina, 334</b><p>Vila Redentora<br>São José do Rio Preto — SP<br>CEP 15015-205</p></address>
  <a class="map-card reveal" href="${maps}" target="_blank" rel="noopener noreferrer" aria-label="Abrir rota até a Confeitaria Paganelli no Google Maps"><span class="map-grid" aria-hidden="true"></span><span class="map-pin">${svg('pin')}</span><span class="map-copy"><small>COMO CHEGAR</small><b>Abra a rota até<br>a Paganelli</b><em>Google Maps ${svg('route')}</em></span></a>
  <div class="contact reveal"><span>Telefone</span><a href="${phone}">(17) 3231-4174 ${svg('arrow')}</a><span>Instagram</span><a class="instagram-link" href="${instagram}" target="_blank" rel="noopener">@confeitariapaganelli ${svg('ig')}</a></div>
 </div>
</section>
</main>
<footer><div class="footer-brand"><img src="/images/logo-paganelli.svg" alt="Paganelli Confeitaria"></div><p>Confeitaria Paganelli · desde 1947<br>São José do Rio Preto — SP</p><a href="#inicio">Voltar ao início ${svg('arrow')}</a></footer>`;

const writingTargets=document.querySelectorAll('.manifesto-copy h2,.quote-band p,.atmosphere-head h2,.table-head h2,.heritage-copy h2,.reviews-head h2,.guide-head h2,.visit-copy h2');
const wrapWords=(root)=>{
 let index=0;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 const nodes=[];
 while(walker.nextNode()) if(walker.currentNode.nodeValue.trim()) nodes.push(walker.currentNode);
 nodes.forEach(node=>{
  const fragment=document.createDocumentFragment();
  node.nodeValue.split(/(\s+)/).forEach(part=>{
   if(!part.trim()){fragment.append(part);return}
   const span=document.createElement('span');span.className='scribe-word';span.style.setProperty('--word',index++);span.textContent=part;fragment.append(span);
  });
  node.replaceWith(fragment);
 });
 root.classList.add('scribe-title');
 root.insertAdjacentHTML('beforeend','<svg class="write-line" viewBox="0 0 600 70" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M8 48 C112 18 205 66 302 39 S486 24 592 45"/></svg>');
};
writingTargets.forEach(wrapWords);

const trigger=document.querySelector('.menu-trigger'), menu=document.querySelector('.mobile-menu'), close=document.querySelector('.menu-close');
menu.inert=true;
const focusables=()=>[close,...menu.querySelectorAll('a')];
function openMenu(){menu.inert=false;menu.classList.add('open');menu.setAttribute('aria-hidden','false');trigger.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');setTimeout(()=>close.focus(),120)}
function closeMenu(){menu.classList.remove('open');menu.setAttribute('aria-hidden','true');menu.inert=true;trigger.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');trigger.focus()}
trigger.addEventListener('click',openMenu);close.addEventListener('click',closeMenu);menu.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(!menu.classList.contains('open'))return;if(e.key==='Escape')closeMenu();if(e.key==='Tab'){const f=focusables(),first=f[0],last=f.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets=[...document.querySelectorAll('.reveal,.construct,.image-build')];
if(reduced){document.body.classList.add('site-ready');revealTargets.forEach(el=>el.classList.add(el.classList.contains('reveal')?'visible':'built'))}
else{
 document.body.classList.add('intro-playing','motion-ready');
 const handoffDelay=6250;
 setTimeout(()=>{document.body.classList.add('site-ready');document.body.classList.remove('intro-playing');document.querySelector('.hero-image')?.classList.add('built')},handoffDelay);
 const buildImage=el=>{const rail=el.closest('.atmosphere-rail');if(rail){if(rail.dataset.buildScheduled)return;rail.dataset.buildScheduled='true';rail.querySelectorAll('.image-build').forEach((card,i)=>setTimeout(()=>card.classList.add('built'),i*170))}else el.classList.add('built')};
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;if(el.classList.contains('reveal'))el.classList.add('visible');if(el.classList.contains('construct'))el.classList.add('built');if(el.classList.contains('image-build'))buildImage(el);io.unobserve(el)}),{threshold:.1,rootMargin:'0px 0px -10%'});
 revealTargets.forEach((el,i)=>{if(el.classList.contains('reveal'))el.style.setProperty('--reveal-delay',`${(i%4)*90}ms`);io.observe(el)});
 const progress=document.querySelector('.scroll-progress'),progressLabel=progress?.querySelector('.recipe-progress__label'),progressDots=[...(progress?.querySelectorAll('.recipe-progress__dots b')||[])],chapterStops=[['inicio','Início'],['oficio','O ofício'],['mesa','Da vitrine'],['avaliacoes','Avaliações'],['visita','Visite']].map(([id,label])=>({el:document.getElementById(id),label}));let ticking=false;
 const updateMotion=()=>{const max=document.documentElement.scrollHeight-innerHeight,p=Math.max(0,Math.min(1,scrollY/(max||1)));progress?.style.setProperty('--progress',p);let active=0;chapterStops.forEach((stop,i)=>{if(stop.el&&stop.el.getBoundingClientRect().top<=innerHeight*.45)active=i});if(progressLabel)progressLabel.textContent=chapterStops[active]?.label||'Início';progressDots.forEach((dot,i)=>dot.classList.toggle('active',i<=active));document.querySelectorAll('.image-build img').forEach((img,index)=>{const frame=img.closest('.image-build');if(innerWidth<=900){frame.style.setProperty('--parallax-y','0px');return}const r=frame.getBoundingClientRect(),d=(r.top+r.height/2-innerHeight/2)/innerHeight,depth=.72+(index%3)*.14;frame.style.setProperty('--parallax-y',`${Math.max(-20,Math.min(20,-d*16*depth))}px`)});ticking=false};
 const revealPassed=()=>{const nearBottom=scrollY+innerHeight>=document.documentElement.scrollHeight-12;revealTargets.forEach(el=>{const r=el.getBoundingClientRect(),isImage=el.classList.contains('image-build'),skipped=r.bottom<=0,inZone=isImage?(r.top<innerHeight*.88&&r.bottom>0):r.top<innerHeight*1.08;if(nearBottom||skipped||inZone){if(el.classList.contains('reveal'))el.classList.add('visible');if(el.classList.contains('construct'))el.classList.add('built');if(isImage)buildImage(el)}})};
 addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{updateMotion();revealPassed()});ticking=true}},{passive:true});updateMotion();revealPassed();
}

document.querySelectorAll('.review').forEach((card,i)=>card.dataset.index=String(i+1).padStart(2,'0'));

const atmosphereRail=document.querySelector('.atmosphere-rail');
if(atmosphereRail){const cards=[...atmosphereRail.querySelectorAll('.atmosphere-card')],status=document.querySelector('[data-rail="atmosphere"]'),dots=[...status.querySelectorAll('button')],label=status.querySelector('p span'),count=status.querySelector('p b'),names=['O salão como cenário','Rosa em todos os detalhes','Luzes sobre o jardim','A vitrine como primeiro convite'];let raf=false,active=0;const setActive=i=>{active=i;dots.forEach((d,n)=>{d.classList.toggle('active',n===i);d.setAttribute('aria-selected',String(n===i))});count.textContent=String(i+1).padStart(2,'0');label.textContent=names[i]};const update=()=>{const c=atmosphereRail.scrollLeft+atmosphereRail.clientWidth/2;let best=0,dist=Infinity;cards.forEach((card,i)=>{const d=Math.abs(card.offsetLeft+card.offsetWidth/2-c);if(d<dist){dist=d;best=i}});if(best!==active)setActive(best);raf=false};atmosphereRail.addEventListener('scroll',()=>{if(!raf){requestAnimationFrame(update);raf=true}},{passive:true});dots.forEach((dot,i)=>dot.addEventListener('click',()=>{atmosphereRail.scrollTo({left:cards[i].offsetLeft-atmosphereRail.offsetLeft,behavior:reduced?'auto':'smooth'});setActive(i)}));setActive(0)}

for(const [selector,key] of [['.reviews-grid','reviews'],['.guide-grid','guide']]){const rail=document.querySelector(selector),status=document.querySelector(`[data-rail-status="${key}"]`);if(!rail||!status)continue;const cards=[...rail.children],number=status.querySelector('b'),bar=status.querySelector('i');let frame=false;const update=()=>{const center=rail.scrollLeft+rail.clientWidth/2;let active=0,distance=Infinity;cards.forEach((card,i)=>{const d=Math.abs(card.offsetLeft+card.offsetWidth/2-center);if(d<distance){distance=d;active=i}});number.textContent=String(active+1).padStart(2,'0');bar.style.setProperty('--rail-progress',`${((active+1)/cards.length)*100}%`);frame=false};rail.addEventListener('scroll',()=>{if(!frame){requestAnimationFrame(update);frame=true}},{passive:true});update()}
