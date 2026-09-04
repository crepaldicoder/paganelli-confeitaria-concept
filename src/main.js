import './style.css';

const phone='tel:+551732314174';
const maps='https://www.google.com/maps/place/Confeitaria+Paganelli/@-20.8203768,-49.3894545,17z/data=!4m6!3m5!1s0x94bdadbadbd0a8eb:0x25475b3bbd009d45!8m2!3d-20.8203768!4d-49.3894545!16s%2Fg%2F11q40g7yw_';
const instagram='https://www.instagram.com/confeitariapaganelli/';
const icon=(name)=>({arrow:'<path d="M5 12h14M14 6l6 6-6 6"/>',phone:'<path d="M7.2 3.5 10 8 8.1 9.9c1.3 2.8 3.2 4.8 6 6.1l2-2 4.5 2.8c.5.3.6.9.4 1.4-.7 1.7-2.4 2.8-4.3 2.7C9.4 20.3 3.7 14.6 3.1 7.3 3 5.4 4 3.8 5.8 3.1c.5-.2 1.1 0 1.4.4Z"/>',pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>'}[name]);
const svg=(name)=>`<svg viewBox="0 0 24 24" aria-hidden="true">${icon(name)}</svg>`;

document.querySelector('#app').innerHTML=`
<a class="skip" href="#conteudo">Pular para o conteúdo</a>
<header class="topbar">
  <a class="brand" href="#inicio" aria-label="Paganelli, início"><img src="/images/logo-paganelli.png" alt="Paganelli Confeitaria"></a>
  <nav class="desktop-nav" aria-label="Principal"><a href="#oficio">O ofício</a><a href="#mesa">Da vitrine</a><a href="#avaliacoes">Avaliações</a><a href="#visita">Visite</a></nav>
  <a class="top-cta" href="${phone}">${svg('phone')} Ligar agora</a>
  <button class="menu-trigger" aria-expanded="false" aria-controls="menu"><span>Menu</span><i></i><i></i></button>
</header>
<div class="mobile-menu" id="menu" aria-hidden="true">
 <button class="menu-close" aria-label="Fechar menu"><span>Fechar</span><i>×</i></button>
 <nav aria-label="Navegação móvel"><a href="#inicio">01 — Início</a><a href="#oficio">02 — O ofício</a><a href="#mesa">03 — Da vitrine</a><a href="#avaliacoes">04 — Avaliações</a><a href="#visita">05 — Visite</a></nav>
 <p>Rua Ondina, 334<br>Vila Redentora · Rio Preto</p>
</div>
<main id="conteudo">
<section class="hero" id="inicio">
 <div class="hero-copy">
  <p class="eyebrow reveal">Confeitaria de Rio Preto · segundo o perfil, desde 1947</p>
  <h1 class="hero-title"><span>Receitas</span><span>que o tempo</span><em>aperfeiçoa.</em></h1>
  <p class="hero-intro reveal">Uma proposta digital para celebrar o fazer artesanal, a vitrine generosa e os encontros que atravessam gerações.</p>
  <div class="hero-actions reveal"><a class="button primary" href="${phone}">${svg('phone')} Falar com a confeitaria</a><a class="text-link" href="#oficio">Conhecer a proposta ${svg('arrow')}</a></div>
  <div class="hero-facts reveal"><span><b>4,7</b> avaliação pública</span><span><b>1</b> endereço em Rio Preto</span></div>
 </div>
 <figure class="hero-image"><img src="/images/hero-folhado.png" alt="Massa folhada com creme e frutas em uma bancada de confeitaria" fetchpriority="high"><figcaption>Direção de arte conceitual — não representa produto específico do estabelecimento.</figcaption></figure>
 <div class="stamp" aria-hidden="true"><span>feito com tempo</span><b>1947</b><small>RIO PRETO</small></div>
</section>
<section class="ribbon" aria-label="Valores"><div class="ribbon-track"><span>massa folhada</span><i>◆</i><span>receitas de família</span><i>◆</i><span>produção artesanal</span><i>◆</i><span>memória afetiva</span><i>◆</i><span>massa folhada</span><i>◆</i><span>receitas de família</span></div></section>
<section class="manifesto" id="oficio">
 <div class="chapter reveal"><span>Capítulo 01</span><b>O ofício</b></div>
 <div class="manifesto-copy reveal"><p class="kicker">Nem toda receita começa no papel.</p><h2>Algumas começam <em>nas mãos.</em></h2><p>A história pública da Paganelli aponta para uma confeitaria presente em Rio Preto há décadas. Esta página não inventa um passado: transforma esse sinal de tradição em uma experiência digital clara, calorosa e útil.</p></div>
 <figure class="craft-image reveal"><img src="/images/maos-oficio.png" alt="Mãos peneirando açúcar sobre uma massa folhada"><figcaption><span>01</span> O gesto antes da vitrine</figcaption></figure>
 <div class="recipe-note reveal"><span>UMA BOA RECEITA PEDE</span><ul><li><b>01</b> matéria-prima</li><li><b>02</b> repetição e cuidado</li><li><b>03</b> tempo de forno</li><li><b>04</b> gente à mesa</li></ul></div>
</section>
<section class="quote-band reveal"><p>“Tradição não é ficar parada.<br><em>É saber o que não pode se perder.</em>”</p><span>— conceito editorial desta proposta</span></section>
<section class="table-section" id="mesa">
 <div class="chapter light reveal"><span>Capítulo 02</span><b>Da vitrine</b></div>
 <div class="table-head reveal"><h2>Do doce ao salgado,<br><em>uma mesa inteira.</em></h2><p>A presença pública descreve a Paganelli como confeitaria. Em vez de publicar um cardápio possivelmente desatualizado, esta proposta convida o cliente a consultar a seleção do dia diretamente.</p></div>
 <figure class="table-image reveal"><img src="/images/mesa-doces.png" alt="Mesa vista de cima com doces e salgados variados"><figcaption>Imagem conceitual criada para esta proposta; itens sujeitos à disponibilidade real.</figcaption></figure>
 <div class="daily-card reveal"><small>A ESCOLHA CERTA É A DE HOJE</small><h3>Consulte a vitrine<br>e faça sua encomenda.</h3><a class="button paper" href="${phone}">${svg('phone')} (17) 3231-4174</a></div>
</section>
<section class="heritage">
 <div class="heritage-number reveal"><small>Segundo o perfil público</small><b>19<span>47</span></b></div>
 <div class="heritage-copy reveal"><h2>Uma história que merece<br>um endereço digital à altura.</h2><p>A página organiza contato e localização sem apagar a personalidade de um negócio tradicional. É uma demonstração independente, criada para mostrar esse potencial.</p><div class="rules"><span>Sem inventar preços</span><span>Sem prometer disponibilidade</span><span>Com contato direto</span></div></div>
</section>
<section class="reviews" id="avaliacoes">
 <div class="chapter reveal"><span>Capítulo 03</span><b>Avaliações</b></div>
 <div class="reviews-head reveal"><p class="kicker">Reputação pública</p><h2>O que fica<br><em>depois da visita.</em></h2><div class="review-score"><b>4,7</b><span aria-label="4,7 de 5 estrelas">★★★★★</span><small>nota exibida no Google Maps<br>na data da consulta</small></div></div>
 <div class="reviews-grid">
  <article class="review reveal"><span>★★★★★</span><blockquote>“Atendimento excelente das meninas do balcão… produtos de qualidade… sem falar na decoração que está espetacular.”</blockquote><div class="review-meta"><b>Sabrina Sampaio</b><small>Foursquare · 4 anos atrás</small></div></article>
  <article class="review reveal"><span>★★★★★</span><blockquote>“Os produtos de qualidade e fresquinho… A decoração é muito charmosa.”</blockquote><div class="review-meta"><b>Sabrina Sampaio</b><small>Restaurant Guru · 4 anos atrás</small></div></article>
  <article class="review reveal"><span>★★★★★</span><blockquote>“Bolos e tortas deliciosas em massa folheada.”</blockquote><div class="review-meta"><b>Fernanda Oliveira Brito</b><small>Foursquare · 9 anos atrás</small></div></article>
 </div>
 <div class="reviews-note reveal"><p>Trechos de avaliações públicas reproduzidos parcialmente, com autoria, origem e antiguidade. Comentários antigos não são apresentados como atuais.</p><a class="text-link" href="https://restaurantguru.com.br/Paganelli-Sao-Jose-do-Rio-Preto" target="_blank" rel="noopener">Ver fonte ${svg('arrow')}</a></div>
</section>
<section class="before-you-go">
 <div class="chapter reveal"><span>Antes de sair</span><b>Informação útil</b></div>
 <div class="guide-head reveal"><p class="kicker">Uma página bonita também precisa ser honesta</p><h2>Confirme hoje.<br><em>Aproveite sem dúvida.</em></h2><p>Cadastros públicos mudam. Por isso, esta proposta separa o que foi encontrado online do que deve ser confirmado diretamente antes da visita.</p></div>
 <div class="guide-grid reveal">
  <article><b>01</b><h3>O que há na vitrine?</h3><p>Consulte os doces, salgados e encomendas disponíveis no dia. As fotografias desta página são direção de arte e não funcionam como cardápio.</p></article>
  <article><b>02</b><h3>Qual é o horário?</h3><p>O Maps indicava funcionamento na consulta, mas horários podem mudar em feriados ou ocasiões especiais. Ligue antes de se deslocar.</p></article>
  <article><b>03</b><h3>Posso encomendar?</h3><p>Use o telefone público para perguntar sobre antecedência, tamanhos, sabores e formas de retirada. Nenhuma dessas condições foi presumida aqui.</p></article>
  <article><b>04</b><h3>Esta página é oficial?</h3><p>Não. É uma proposta independente de presença digital. Nome, endereço, contato e nota foram consultados em fontes públicas.</p></article>
  <article><b>05</b><h3>Os preços estão atualizados?</h3><p>Nenhum preço foi publicado. Valores, formas de pagamento e condições de encomenda devem ser informados pela própria confeitaria no contato.</p></article>
  <article><b>06</b><h3>As fotos são da loja?</h3><p>Não. As imagens são criações editoriais produzidas para esta demonstração. Elas comunicam atmosfera e ofício, mas não documentam espaço ou produtos reais.</p></article>
  <article><b>07</b><h3>Precisa de acessibilidade?</h3><p>Consulte previamente as condições de acesso e atendimento. Esta proposta não presume informações estruturais que não foram confirmadas com o estabelecimento.</p></article>
  <article><b>08</b><h3>Encontrou algo diferente?</h3><p>Priorize sempre o contato direto. Endereço, telefone, horários e disponibilidade podem mudar depois da data em que as fontes públicas foram consultadas.</p></article>
 </div>
 <div class="source-note reveal"><span>FONTES CONSULTADAS</span><p>Google Maps e perfil público no Instagram. A alegação “desde 1947” é atribuída ao próprio perfil social da empresa. Informações verificadas para esta proposta em setembro de 2026.</p></div>
</section>
<section class="visit" id="visita">
 <div class="chapter reveal"><span>Capítulo 04</span><b>Visite</b></div>
 <div class="visit-grid">
  <div class="visit-copy reveal"><p class="kicker">Vila Redentora · São José do Rio Preto</p><h2>O caminho<br>mais curto até<br><em>a vitrine.</em></h2></div>
  <address class="address reveal"><span>Endereço público</span><b>Rua Ondina, 334</b><p>Vila Redentora<br>São José do Rio Preto — SP<br>CEP 15015-205</p><a class="button primary" href="${maps}" target="_blank" rel="noopener">${svg('pin')} Abrir no Google Maps</a></address>
  <div class="contact reveal"><span>Contato público</span><a href="${phone}">(17) 3231-4174 ${svg('arrow')}</a><span>Rede social</span><a href="${instagram}" target="_blank" rel="noopener">@confeitariapaganelli ${svg('ig')}</a></div>
 </div>
</section>
</main>
<footer><div class="footer-brand"><img src="/images/logo-paganelli.png" alt="Paganelli Confeitaria"></div><p>Conceito independente de landing page.<br>Não é o site oficial da Confeitaria Paganelli.</p><a href="#inicio">Voltar ao início ↑</a></footer>`;

const trigger=document.querySelector('.menu-trigger'), menu=document.querySelector('.mobile-menu'), close=document.querySelector('.menu-close');
menu.inert=true;
const focusables=()=>[close,...menu.querySelectorAll('a')];
function openMenu(){menu.inert=false;menu.classList.add('open');menu.setAttribute('aria-hidden','false');trigger.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');setTimeout(()=>close.focus(),120)}
function closeMenu(){menu.classList.remove('open');menu.setAttribute('aria-hidden','true');menu.inert=true;trigger.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');trigger.focus()}
trigger.addEventListener('click',openMenu);close.addEventListener('click',closeMenu);menu.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(!menu.classList.contains('open'))return;if(e.key==='Escape')closeMenu();if(e.key==='Tab'){const f=focusables(),first=f[0],last=f.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el))}
