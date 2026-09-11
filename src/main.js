import './style.css';
import './desktop-rework.css';
import './refinement.css';
import './component-integration.css';
import './motion-craft.css';

const phone='tel:+551732314174';
const maps='https://www.google.com/maps/place/Confeitaria+Paganelli/@-20.8203768,-49.3894545,17z/data=!4m6!3m5!1s0x94bdadbadbd0a8eb:0x25475b3bbd009d45!8m2!3d-20.8203768!4d-49.3894545!16s%2Fg%2F11q40g7yw_';
const instagram='https://www.instagram.com/confeitariapaganelli/';
const whatsapp='https://wa.me/551732314174?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Paganelli.';
const icon=(name)=>({arrow:'<path d="M5 12h14M14 6l6 6-6 6"/>',phone:'<path d="M7.2 3.5 10 8 8.1 9.9c1.3 2.8 3.2 4.8 6 6.1l2-2 4.5 2.8c.5.3.6.9.4 1.4-.7 1.7-2.4 2.8-4.3 2.7C9.4 20.3 3.7 14.6 3.1 7.3 3 5.4 4 3.8 5.8 3.1c.5-.2 1.1 0 1.4.4Z"/>',pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',whatsapp:'<path fill="currentColor" stroke="none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>',route:'<path d="M5 19c0-3 2-4 4-4s4-1 4-4 2-5 6-5"/><path d="m16 3 3 3-3 3"/><circle cx="5" cy="19" r="2"/>'}[name]);
const svg=(name)=>`<svg viewBox="0 0 24 24" aria-hidden="true">${icon(name)}</svg>`;
const starPath='m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z';
// Cada estrela carrega sua própria fração, então o preenchimento não depende do gap nem do tamanho.
const ratingStars=(value,decorative=false)=>{
 const stars=Array.from({length:5},(_,i)=>{
  const p=+(Math.max(0,Math.min(1,value-i))*100).toFixed(2);
  return `<span class="star" style="--p:${p}%;--i:${i}"><svg class="star-o" viewBox="0 0 24 24" aria-hidden="true"><path d="${starPath}"/></svg><svg class="star-f" viewBox="0 0 24 24" aria-hidden="true"><path d="${starPath}"/></svg></span>`;
 }).join('');
 const a11y=decorative?'aria-hidden="true"':`role="img" aria-label="${String(value).replace('.',',')} de 5 estrelas"`;
 return `<span class="rating-stars" ${a11y}>${stars}</span>`;
};
const photoSize={'hero-folhado':[1122,1402],'maos-oficio':[1086,1448],'interior-editorial':[1086,1448],'sala-rosa-editorial':[1023,1537],'ambiente-luzes-editorial':[1333,1180],'vitrine-editorial':[1453,1082],'torta-isolada':[809,810]};
const photo=(name,alt,eager=false)=>{const [w,h]=photoSize[name];const load=eager?'fetchpriority="high"':'loading="lazy" decoding="async"';return `<picture><source srcset="/images/${name}.avif" type="image/avif"><source srcset="/images/${name}.webp" type="image/webp"><img src="/images/${name}.png" alt="${alt}" width="${w}" height="${h}" ${load}></picture>`};

document.querySelector('#app').innerHTML=`
<a class="skip" href="#conteudo">Pular para o conteúdo</a>
<div class="build-intro" aria-hidden="true"><div class="intro-panel intro-panel--left"></div><div class="intro-panel intro-panel--right"></div><div class="intro-stage"><span class="intro-index">SÃO JOSÉ DO RIO PRETO · 1947</span><div class="intro-writing"><img class="intro-logo-revised" src="/images/logo-paganelli-intro.svg" alt="" width="1876" height="462"></div><p>uma receita construída<br>traço por traço</p></div></div>
<header class="topbar">
  <a class="brand" href="#inicio" aria-label="Paganelli, início"><img class="literal-logo" src="/images/logo-paganelli.svg" alt=""></a>
  <nav class="desktop-nav" aria-label="Principal"><a href="#oficio">O ofício</a><a href="#mesa">Da vitrine</a><a href="#avaliacoes">Avaliações</a><a href="#visita">Visite</a></nav>
  <a class="top-cta" href="${phone}">${svg('phone')} Ligar agora</a>
  <button class="menu-trigger" aria-expanded="false" aria-controls="menu"><span>Menu</span><i></i><i></i></button>
  <i class="topbar-progress" aria-hidden="true"></i>
</header>
<div class="mobile-menu" id="menu" aria-hidden="true">
 <button class="menu-close" aria-label="Fechar menu"><span>Fechar</span><i aria-hidden="true"></i></button>
 <nav aria-label="Navegação móvel"><a href="#inicio">01 — Início</a><a href="#oficio">02 — O ofício</a><a href="#mesa">03 — Da vitrine</a><a href="#avaliacoes">04 — Avaliações</a><a href="#visita">05 — Visite</a></nav>
 <p>Rua Ondina, 334<br>Vila Redentora · Rio Preto</p>
</div>
<a class="whatsapp-float" href="${whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Paganelli pelo WhatsApp"><span>Fale no WhatsApp</span>${svg('whatsapp')}</a>
<main id="conteudo">
<section class="threshold" id="inicio" data-panel="pink">
 <div class="threshold-stage">
  <video class="threshold-video" muted playsinline webkit-playsinline preload="none" tabindex="-1" aria-hidden="true"></video>
  <div class="threshold-veil" aria-hidden="true"></div>
  <div class="hero-copy threshold-copy">
   <p class="eyebrow">Confeitaria em São José do Rio Preto</p>
   <h1 class="hero-title"><span>Receitas</span><span>que o tempo</span><em>aperfeiçoa.</em></h1>
   <p class="hero-intro">Há gerações, a Paganelli transforma o fazer artesanal, a vitrine generosa e o prazer de receber em uma tradição de Rio Preto.</p>
   <div class="hero-actions"><a class="button primary" href="${phone}">${svg('phone')} Falar com a confeitaria</a><a class="text-link" href="#oficio">Conheça nossa história ${svg('arrow')}</a></div>
   <div class="hero-facts"><span><b>4,7</b>${ratingStars(4.7,true)}<small>avaliação no Google</small></span></div>
   <div class="hero-signature"><img class="literal-logo" src="/images/logo-paganelli.svg" alt="" width="1876" height="462"></div>
  </div>
  <div class="stamp" aria-hidden="true"><i class="stamp-glare"><i class="stamp-glare-spin"></i></i><span>feito com tempo</span><b>1947</b><small>RIO PRETO</small></div>
  <div class="threshold-exit" aria-hidden="true"></div>
 </div>
</section>
<section class="ribbon" aria-label="Valores" data-panel="blue"><div class="ribbon-track"><span>massa folhada</span><i aria-hidden="true"></i><span>receitas de família</span><i aria-hidden="true"></i><span>produção artesanal</span><i aria-hidden="true"></i><span>memória afetiva</span><i aria-hidden="true"></i><span>massa folhada</span><i aria-hidden="true"></i><span>receitas de família</span></div></section>
<section class="manifesto construct" id="oficio">
 <div class="chapter reveal"><span>Capítulo 01</span><b>O ofício</b></div>
 <div class="manifesto-copy reveal"><p class="kicker">Nem toda receita começa no papel.</p><h2>Algumas começam <em>nas mãos.</em></h2><p>Desde 1947, a Paganelli faz parte da história de Rio Preto. Uma tradição construída com cuidado, repetição e aquele olhar atento que reconhece o ponto certo de cada receita.</p></div>
 <figure class="craft-image reveal image-build">${photo('hero-folhado','Massa folhada com creme e frutas em uma bancada de confeitaria')}<figcaption><span>01</span> Delicadeza em cada camada</figcaption></figure>
 <div class="recipe-note reveal"><span>UMA BOA RECEITA PEDE</span><ul><li><b>01</b> matéria-prima</li><li><b>02</b> repetição e cuidado</li><li><b>03</b> tempo de forno</li><li><b>04</b> gente à mesa</li></ul></div>
</section>
<section class="quote-band reveal construct" data-panel="pink"><p>“Tradição não é ficar parada.<br><em>É saber o que não pode se perder.</em>”</p><span>— Paganelli, desde 1947</span></section>
<section class="atmosphere construct" id="atmosfera">
 <div class="chapter reveal"><span>Interlúdio</span><b>Por dentro</b></div>
 <div class="atmosphere-head reveal"><p class="kicker">Matéria, cor e memória</p><h2>Uma atmosfera<br><em>que também alimenta.</em></h2><p>Um espaço pensado para acolher, escolher com calma e transformar uma visita à confeitaria em parte do dia.</p></div>
 <div class="atmosphere-rail" role="region" aria-label="Galeria da confeitaria" tabindex="0">
  <figure class="atmosphere-card image-build"><div class="media-frame">${photo('interior-editorial','Salão da Paganelli com mobiliário de madeira, teto rosa e iluminação quente')}</div><figcaption><span>01</span><div><b>O salão como cenário</b><small>madeira, rosa e luz natural</small></div></figcaption></figure>
  <figure class="atmosphere-card image-build"><div class="media-frame">${photo('sala-rosa-editorial','Segundo ângulo do salão rosa da Paganelli com mesas e balcão')}</div><figcaption><span>02</span><div><b>Rosa em todos os detalhes</b><small>do piso ao balcão da confeitaria</small></div></figcaption></figure>
  <figure class="atmosphere-card image-build"><div class="media-frame">${photo('ambiente-luzes-editorial','Parede floral da Paganelli iluminada por lâmpadas amarelas')}</div><figcaption><span>03</span><div><b>Luzes sobre o jardim</b><small>a parede floral em luz âmbar</small></div></figcaption></figure>
  <figure class="atmosphere-card image-build"><div class="media-frame">${photo('vitrine-editorial','Vitrine com folhados de limão da Paganelli')}</div><figcaption><span>04</span><div><b>A vitrine como primeiro convite</b><small>folhados preparados para o dia</small></div></figcaption></figure>
 </div>
 <div class="rail-status" data-rail="atmosphere"><div class="rail-dots"><button class="active" aria-label="Ver imagem 1" aria-selected="true"></button><button aria-label="Ver imagem 2" aria-selected="false"></button><button aria-label="Ver imagem 3" aria-selected="false"></button><button aria-label="Ver imagem 4" aria-selected="false"></button></div><p><b>01</b> / 04 <span>O salão como cenário</span></p><small>Arraste para o lado</small></div>
</section>
<section class="table-section construct" id="mesa" data-panel="pink">
 <div class="chapter light reveal"><span>Capítulo 02</span><b>Da vitrine</b></div>
 <div class="table-head reveal"><h2>Do doce ao salgado,<br><em>uma mesa inteira.</em></h2><p>Receitas para o café, para a sobremesa, para celebrar e para levar. Consulte a seleção do dia e encontre o sabor certo para cada ocasião.</p></div>
 <figure class="table-image reveal image-build">${photo('torta-isolada','Torta de frutas da Paganelli vista de cima')}</figure>
 <div class="daily-card reveal"><small>A ESCOLHA CERTA É A DE HOJE</small><h3>Consulte a vitrine<br>e faça sua encomenda.</h3><a class="button paper" href="${phone}">${svg('phone')} (17) 3231-4174</a></div>
</section>
<section class="heritage construct" data-panel="blue">
 <div class="heritage-number reveal"><small>Uma história desde</small><b>19<span>47</span></b></div>
 <div class="heritage-copy reveal"><h2>Uma tradição presente<br>na memória de Rio Preto.</h2><p>Décadas de receitas, encontros e celebrações fizeram da Paganelli um endereço querido por diferentes gerações.</p><div class="rules"><span>Feito com cuidado</span><span>Receitas que permanecem</span><span>Gente à mesa</span></div></div>
</section>
<section class="reviews construct" id="avaliacoes">
 <div class="chapter reveal"><span>Capítulo 03</span><b>Avaliações</b></div>
 <div class="reviews-head reveal"><p class="kicker">Quem conhece, recomenda</p><h2>O que fica<br><em>depois da visita.</em></h2><div class="review-score"><b>4,7</b>${ratingStars(4.7)}<small>avaliação no Google</small></div></div>
 <div class="reviews-grid">
  <article class="review review--lead reveal"><blockquote>“Atendimento excelente das meninas do balcão… produtos de qualidade… sem falar na decoração que está espetacular.”</blockquote><div class="review-meta"><b>Sabrina Sampaio</b><small>Foursquare · 4 anos atrás</small></div></article>
  <article class="review reveal"><blockquote>“Os produtos de qualidade e fresquinho… A decoração é muito charmosa.”</blockquote><div class="review-meta"><b>Sabrina Sampaio</b><small>Restaurant Guru · 4 anos atrás</small></div></article>
  <article class="review reveal"><blockquote>“Bolos e tortas deliciosas em massa folheada.”</blockquote><div class="review-meta"><b>Fernanda Oliveira Brito</b><small>Foursquare · 9 anos atrás</small></div></article>
 </div>
 <div class="compact-rail-status" data-rail-status="reviews"><b>01</b><span>/ 03</span><i aria-hidden="true"></i><small>Arraste para ver outras avaliações</small></div>
 <div class="reviews-note reveal"><p>Experiências compartilhadas por clientes que passaram pela Paganelli.</p><a class="text-link" href="https://restaurantguru.com.br/Paganelli-Sao-Jose-do-Rio-Preto" target="_blank" rel="noopener">Ver avaliações ${svg('arrow')}</a></div>
</section>
<section class="before-you-go construct" data-panel="pink">
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
<footer data-panel="pink"><div class="footer-brand"><img src="/images/logo-paganelli.svg" alt="Paganelli Confeitaria"></div><p>Confeitaria Paganelli · desde 1947<br>São José do Rio Preto — SP</p><a href="#inicio">Voltar ao início ${svg('arrow')}</a></footer>`;

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
let updateThresholdRef=null;
const thresholdEl=document.querySelector('.threshold'),thresholdVideo=document.querySelector('.threshold-video'),portraitStage=matchMedia('(max-width:900px)').matches,stageVariant=portraitStage?'9x16':'16x9';
if(thresholdVideo){
 thresholdVideo.poster=`/images/fachada-poster-${stageVariant}.webp`;
 if(!reduced){
  thresholdVideo.src=`/images/fachada-entrada-${stageVariant}.mp4`;
  // o vídeo só desce depois que a página está interativa; o poster segura o hero até lá
  const warm=()=>{
   thresholdVideo.preload='auto';thresholdVideo.load();
   // iOS costuma nao decodificar um video que nunca tocou: um play/pause mudo acorda
   // o decodificador para que o seek passe a renderizar quadro.
   thresholdVideo.muted=true;thresholdVideo.playsInline=true;
   const prime=thresholdVideo.play();
   if(prime&&prime.then)prime.then(()=>thresholdVideo.pause()).catch(()=>{
    // bloqueado sem gesto: tenta de novo no primeiro toque
    const go=()=>{thresholdVideo.play().then(()=>thresholdVideo.pause()).catch(()=>{});removeEventListener('touchstart',go);removeEventListener('pointerdown',go)};
    addEventListener('touchstart',go,{passive:true});addEventListener('pointerdown',go);
   });
  };
  'requestIdleCallback' in window?requestIdleCallback(warm,{timeout:2000}):setTimeout(warm,700);
  // assim que houver quadro decodificado, casa com a posicao atual do scroll
  thresholdVideo.addEventListener('loadeddata',()=>updateThresholdRef&&updateThresholdRef(),{once:true});
 }
}
document.querySelectorAll('.quote-band,.table-section,.heritage-number,.before-you-go').forEach(section=>{section.classList.add('motion-scene');const field=document.createElement('span');field.className='print-motion-field';field.setAttribute('aria-hidden','true');section.prepend(field)});
const revealTargets=[...document.querySelectorAll('.reveal,.construct,.image-build')];
if(reduced){document.body.classList.add('site-ready');revealTargets.forEach(el=>el.classList.add(el.classList.contains('reveal')?'visible':'built'))}
else{
 document.body.classList.add('motion-ready');
 let introSeen=false;try{introSeen=sessionStorage.getItem('pg-intro')==='1'}catch{}
 if(introSeen){document.querySelector('.build-intro')?.remove();document.body.classList.add('site-ready');document.querySelector('.hero-image')?.classList.add('built')}
 else{
  document.body.classList.add('intro-playing');
  try{sessionStorage.setItem('pg-intro','1')}catch{}
  setTimeout(()=>{document.body.classList.add('site-ready');document.body.classList.remove('intro-playing');document.querySelector('.hero-image')?.classList.add('built')},1200);
 }
 const buildImage=el=>{const rail=el.closest('.atmosphere-rail');if(rail){if(rail.dataset.buildScheduled)return;rail.dataset.buildScheduled='true';rail.querySelectorAll('.image-build').forEach((card,i)=>setTimeout(()=>card.classList.add('built'),i*170))}else el.classList.add('built')};
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;if(el.classList.contains('reveal'))el.classList.add('visible');if(el.classList.contains('construct'))el.classList.add('built');if(el.classList.contains('image-build'))buildImage(el);io.unobserve(el)}),{threshold:.1,rootMargin:'0px 0px -10%'});
 revealTargets.forEach((el,i)=>{if(el.classList.contains('reveal'))el.style.setProperty('--reveal-delay',`${(i%4)*90}ms`);io.observe(el)});
 const topProgress=document.querySelector('.topbar-progress'),navLinks=[...document.querySelectorAll('.desktop-nav a')],chapterStops=[['inicio','Início'],['oficio','O ofício'],['mesa','Da vitrine'],['avaliacoes','Avaliações'],['visita','Visite']].map(([id,label])=>({el:document.getElementById(id),label})),scenePanels=[...document.querySelectorAll('.motion-scene')],parallaxFrames=[...document.querySelectorAll('.image-build')],panelSections=[...document.querySelectorAll('[data-panel]')];let ticking=false,lastChapter=-1,mobileParallaxSettled=false;
 // Atribuir currentTime a cada evento de scroll empilha seeks que se atropelam e
 // engasgam o decoder. Aqui so existe um seek em voo por vez: o alvo mais recente
 // fica guardado e e perseguido assim que o anterior termina. Sem fila, sem atraso
 // artificial, e sem depender da cadencia de rAF (que o iOS estrangula no scroll).
 let seekTarget=0,seekBusy=false,seekGuard=0;
 const flushSeek=()=>{
  if(seekBusy||!thresholdVideo||!thresholdVideo.duration)return;
  if(Math.abs(seekTarget-thresholdVideo.currentTime)<.05)return; // ~1 quadro: evita ping-pong de arredondamento
  seekBusy=true;
  clearTimeout(seekGuard);
  // se o 'seeked' nunca vier (midia em buffer, aba oculta), nao trava para sempre
  seekGuard=setTimeout(()=>{seekBusy=false;flushSeek()},400);
  thresholdVideo.currentTime=seekTarget;
 };
 thresholdVideo?.addEventListener('seeked',()=>{clearTimeout(seekGuard);seekBusy=false;flushSeek()});
 const updateThreshold=()=>{
  if(!thresholdEl)return;
  const span=thresholdEl.offsetHeight-innerHeight,p=Math.max(0,Math.min(1,-thresholdEl.getBoundingClientRect().top/(span||1)));
  thresholdEl.style.setProperty('--t',p.toFixed(4));
  // o vídeo já floresce no creme; a saída só casa os últimos pontos de tom com o papel
  // Cada camada sai na sua propria janela, com smoothstep. Antes era tudo linear e
  // comprimido no primeiro terco: sobravam 48% do percurso sem nada acontecer e o
  // creme entrava de supetao nos ultimos 12%.
  const ramp=(v,a,b)=>{const x=Math.max(0,Math.min(1,(v-a)/(b-a)));return x*x*(3-2*x)};
  const out=(a,b)=>(1-ramp(p,a,b)).toFixed(4);
  thresholdEl.style.setProperty('--fade-stamp',out(.02,.34));
  thresholdEl.style.setProperty('--fade-copy',out(.04,.42));
  thresholdEl.style.setProperty('--fade-veil',out(0,.52));
  thresholdEl.style.setProperty('--rise',ramp(p,.04,.42).toFixed(4));
  thresholdEl.style.setProperty('--exit',ramp(p,.76,1).toFixed(4));
  // scrub nos dois formatos: o 9:16 agora tem keyframes densos, entao aceita seek.
  // Seek nao exige gesto do usuario, o que tira a politica de autoplay do caminho.
  if(thresholdVideo&&thresholdVideo.readyState>=2&&thresholdVideo.duration){
   seekTarget=Math.min(thresholdVideo.duration-.05,p*thresholdVideo.duration);
   flushSeek();
  }
 };
 updateThresholdRef=updateThreshold;

 const updateMotion=()=>{updateThreshold();const max=document.documentElement.scrollHeight-innerHeight,p=Math.max(0,Math.min(1,scrollY/(max||1)));topProgress?.style.setProperty('--progress',p);document.documentElement.style.setProperty('--paper-x',`${Math.sin(scrollY/520)*12}px`);document.documentElement.style.setProperty('--paper-y',`${Math.sin(scrollY/360)*8}px`);let active=0;chapterStops.forEach((stop,i)=>{if(stop.el&&stop.el.getBoundingClientRect().top<=innerHeight*.45)active=i});if(active!==lastChapter){/* chapterStops[0] e o hero, que nao tem link no topo */navLinks.forEach((a,i)=>a.classList.toggle('is-active',i===active-1));lastChapter=active}scenePanels.forEach(panel=>{const r=panel.getBoundingClientRect(),local=Math.max(-1,Math.min(1,(r.top+r.height/2-innerHeight/2)/innerHeight));panel.style.setProperty('--scene-shift-x',`${local*28}px`);panel.style.setProperty('--scene-shift-y',`${local*-12}px`)});if(innerWidth<=900){if(!mobileParallaxSettled){parallaxFrames.forEach(frame=>{frame.style.setProperty('--parallax-y','0px');frame.style.setProperty('--parallax-x','0px');frame.style.setProperty('--parallax-scale','1.045')});mobileParallaxSettled=true}}else{mobileParallaxSettled=false;parallaxFrames.forEach((frame,index)=>{const r=frame.getBoundingClientRect(),d=(r.top+r.height/2-innerHeight/2)/innerHeight,depth=.72+(index%3)*.14;frame.style.setProperty('--parallax-y',`${Math.max(-34,Math.min(34,-d*27*depth))}px`);frame.style.setProperty('--parallax-x',`${Math.max(-9,Math.min(9,d*(index%2?6:-6)))}px`);frame.style.setProperty('--parallax-scale',String(1.04+Math.min(.035,Math.abs(d)*.025)))})}};
 let pendingReveal=[...revealTargets];
 const revealPassed=()=>{if(!pendingReveal.length)return;const nearBottom=scrollY+innerHeight>=document.documentElement.scrollHeight-12;pendingReveal=pendingReveal.filter(el=>{const r=el.getBoundingClientRect(),isImage=el.classList.contains('image-build'),skipped=r.bottom<=0,inZone=isImage?(r.top<innerHeight*.88&&r.bottom>0):r.top<innerHeight*1.08;if(!(nearBottom||skipped||inZone))return true;if(el.classList.contains('reveal'))el.classList.add('visible');if(el.classList.contains('construct'))el.classList.add('built');if(isImage)buildImage(el);return false})};
 // O guard antigo so liberava no fim de updateMotion: se o rAF nao disparasse
 // (inercia de scroll no iOS, aba em segundo plano) ou se algo lancasse, o handler
 // morria para sempre e o video parava de acompanhar o scroll. Agora libera no inicio
 // do callback e tem um timer de seguranca caso o frame nunca venha.
 let tickTimer=0;
 const runUpdate=()=>{ticking=false;clearTimeout(tickTimer);updateMotion();revealPassed()};
 addEventListener('scroll',()=>{
  if(ticking)return;
  ticking=true;
  requestAnimationFrame(runUpdate);
  tickTimer=setTimeout(runUpdate,250);
 },{passive:true});
 updateMotion();revealPassed();
}

if(!reduced&&matchMedia('(hover:hover) and (pointer:fine)').matches){document.querySelectorAll('.button.primary,.top-cta').forEach(el=>{el.addEventListener('pointermove',event=>{const rect=el.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5;el.style.setProperty('--mag-x',`${x*12}px`);el.style.setProperty('--mag-y',`${y*8}px`)});el.addEventListener('pointerleave',()=>{el.style.setProperty('--mag-x','0px');el.style.setProperty('--mag-y','0px')})});
 const stampEl=document.querySelector('.stamp');
 stampEl?.addEventListener('pointermove',event=>{const rect=stampEl.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5,angle=Math.atan2(y,x)*180/Math.PI;stampEl.style.setProperty('--tilt-x',`${x*18}deg`);stampEl.style.setProperty('--tilt-y',`${-y*18}deg`);stampEl.style.setProperty('--glare-x',`${x*30}px`);stampEl.style.setProperty('--glare-y',`${y*30}px`);stampEl.style.setProperty('--glare-rot',`${angle}deg`)});
 stampEl?.addEventListener('pointerleave',()=>{stampEl.style.setProperty('--tilt-x','0deg');stampEl.style.setProperty('--tilt-y','0deg');stampEl.style.setProperty('--glare-x','0px');stampEl.style.setProperty('--glare-y','0px');stampEl.style.removeProperty('--glare-rot')});
}

document.querySelectorAll('.review').forEach((card,i)=>card.dataset.index=String(i+1).padStart(2,'0'));

const atmosphereRail=document.querySelector('.atmosphere-rail');
if(atmosphereRail){const cards=[...atmosphereRail.querySelectorAll('.atmosphere-card')],status=document.querySelector('[data-rail="atmosphere"]'),dots=[...status.querySelectorAll('button')],label=status.querySelector('p span'),count=status.querySelector('p b'),names=['O salão como cenário','Rosa em todos os detalhes','Luzes sobre o jardim','A vitrine como primeiro convite'];let raf=false,active=0;const setActive=i=>{active=i;dots.forEach((d,n)=>{d.classList.toggle('active',n===i);d.setAttribute('aria-selected',String(n===i))});count.textContent=String(i+1).padStart(2,'0');label.textContent=names[i]};const update=()=>{const c=atmosphereRail.scrollLeft+atmosphereRail.clientWidth/2;let best=0,dist=Infinity;cards.forEach((card,i)=>{const d=Math.abs(card.offsetLeft+card.offsetWidth/2-c);if(d<dist){dist=d;best=i}});if(best!==active)setActive(best);raf=false};atmosphereRail.addEventListener('scroll',()=>{if(!raf){requestAnimationFrame(update);raf=true}},{passive:true});dots.forEach((dot,i)=>dot.addEventListener('click',()=>{atmosphereRail.scrollTo({left:cards[i].offsetLeft-atmosphereRail.offsetLeft,behavior:reduced?'auto':'smooth'});setActive(i)}));setActive(0)}

for(const [selector,key] of [['.reviews-grid','reviews'],['.guide-grid','guide']]){const rail=document.querySelector(selector),status=document.querySelector(`[data-rail-status="${key}"]`);if(!rail||!status)continue;const cards=[...rail.children],number=status.querySelector('b'),bar=status.querySelector('i');let frame=false;const update=()=>{const center=rail.scrollLeft+rail.clientWidth/2;let active=0,distance=Infinity;cards.forEach((card,i)=>{const d=Math.abs(card.offsetLeft+card.offsetWidth/2-center);if(d<distance){distance=d;active=i}});number.textContent=String(active+1).padStart(2,'0');bar.style.setProperty('--rail-progress',`${((active+1)/cards.length)*100}%`);frame=false};rail.addEventListener('scroll',()=>{if(!frame){requestAnimationFrame(update);frame=true}},{passive:true});update()}
