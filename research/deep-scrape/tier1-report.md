# Registries Tier 1 — curadoria para confeitaria editorial brasileira

**Coleta:** 2026-09-09 (UTC). **Escopo bruto:** 1.317 variantes/itens: Magic UI 250; Aceternity UI 111 páginas oficiais; React Bits 684 variantes (JS/TS × CSS/Tailwind); Cult UI 157; Eldora UI 115. O inventário integral está em `tier1_registry_inventory.csv`.

## Critério

- **A — usar/adaptar:** reforça rótulo impresso, papel, vitrine, confeitaria e tipografia de época sem parecer dashboard.
- **B — usar pontualmente:** bom mecanismo, mas exige forte reestilização e/ou redução de movimento.
- **C — evitar:** linguagem gamer/SaaS, WebGL pesado ou conteúdo importante dependente de hover/movimento.
- Riscos: **P** performance, **A11y** acessibilidade. Toda animação contínua deve respeitar `prefers-reduced-motion`; texto animado deve manter uma cópia semanticamente legível.

## Shortlist classificada

| Classe | Fonte / componente | URL oficial | Função e dependências oficiais | Adaptação para a confeitaria | Risco P / A11y |
|---|---|---|---|---|---|
| A | Magic UI — Noise Texture | https://magicui.design/docs/components/noise-texture | Ruído SVG `feTurbulence`; sem pacote externo | Papel algodão/embalagem impressa, opacidade 2–5% | baixo / baixo; decorativo `aria-hidden` |
| A | Magic UI — Marquee | https://magicui.design/docs/components/marquee | Faixa infinita; CSS | Letreiro de vitrine com “desde 195…” e sabores, ritmo lento | baixo / médio; pausar, reduzir e não repetir conteúdo essencial |
| A | Magic UI — Highlighter | https://magicui.design/docs/components/highlighter | Traço manual; `motion`, `rough-notation` | Sublinhado de lápis/giz em títulos ou ingredientes | baixo / médio; estado final imediato em redução de movimento |
| A | Magic UI — Pixel Image | https://magicui.design/docs/components/pixel-image | Revelação pixelada; sem pacote externo | Entrada de fotos como retícula de impressão, uma vez | médio / médio; preservar `alt`, sem loop |
| A | Magic UI — Blur Fade | https://magicui.design/docs/components/blur-fade | Entrada blur/fade; `motion` | Vapor suave surgindo sobre fotografia de forno | baixo / médio; blur curto e final estático |
| B | Magic UI — Lens | https://magicui.design/docs/components/lens | Zoom/lupa de mídia; `motion` | Lupa editorial para textura de brigadeiro/biscoito | médio / alto; teclado/touch e alternativa sem hover obrigatórios |
| B | Magic UI — Scroll Based Velocity | https://magicui.design/docs/components/scroll-based-velocity | Texto reage à velocidade de rolagem; `motion` | Faixa tipográfica de papel de embrulho | médio / alto; propenso a enjoo, desativar em reduced-motion |
| A | Aceternity — Noise Background | https://ui.aceternity.com/components/noise-background | Fundo granulado; código oficial usa Motion + utilitário `cn` (`clsx`/`tailwind-merge`) | Grão de offset/filme em áreas creme, vinho e rosa queimado | baixo–médio / baixo; canvas/decorativo fora da árvore a11y |
| A | Aceternity — Parallax Scroll | https://ui.aceternity.com/components/parallax-scroll | Galeria em paralaxe; Motion + `cn` | Álbum de receitas/fotos em colunas, deslocamento discreto | médio / alto; ordem DOM lógica e fallback estático |
| B | Aceternity — Tracing Beam | https://ui.aceternity.com/components/tracing-beam | Linha que acompanha a leitura; Motion + `cn` | Fio de calda desenhando a história da casa | médio / médio; decorativo, sem capturar foco |
| B | Aceternity — Wobble Card | https://ui.aceternity.com/components/wobble-card | Cartão inclina/distorce no ponteiro; Motion + `cn` | Cartões-postais de produtos, amplitude muito menor | médio / alto; não esconder ações no hover |
| B | Aceternity — Images Slider | https://ui.aceternity.com/components/images-slider | Slider de imagens; Motion + `cn` | Vitrine fotográfica manual, sem autoplay | médio / alto; botões, nomes acessíveis e gesto opcional |
| B | Aceternity — Lens | https://ui.aceternity.com/components/lens | Lupa interativa; Motion + `cn` | Macro de miolo, cobertura e papel de embalagem | médio / alto; foco/teclado/touch necessários |
| C | Aceternity — 3D Marquee | https://ui.aceternity.com/components/3d-marquee | Parede 3D de imagens | Só caberia como campanha; tende a “tech demo” | alto / alto; excesso de movimento e leitura difícil |
| A | React Bits — Circular Text | https://reactbits.dev/text-animations/circular-text | Texto em círculo; `motion@^12.23.12` | Selo “feito à mão • receita de família” | baixo / médio; rotação opcional, texto equivalente acessível |
| A | React Bits — Curved Loop | https://reactbits.dev/text-animations/curved-loop | Texto em curva com arrasto; sem dependência externa | Faixa de rótulo curvada, preferir versão não arrastável | baixo / médio; loop decorativo e sem mensagem exclusiva |
| A | React Bits — Fold Text | https://reactbits.dev/text-animations/fold-text | Linhas desdobram como papel; `gsap@^3.13.0` | Título abrindo como papel de seda/receituário | médio / médio; só na entrada, final legível |
| B | React Bits — Blur Text | https://reactbits.dev/text-animations/blur-text | Texto resolve do desfoque; `motion@^12.23.12` | Açúcar de confeiteiro dissipando no título | baixo / médio; não aplicar a parágrafos |
| A | React Bits — Accordion Gallery | https://reactbits.dev/components/accordion-gallery | Painéis expandem em hover **ou foco**, paralaxe; `gsap@^3.13.0` | Vitrine de bolos/tortas como páginas dobradas | médio / médio; foco já previsto, manter legenda persistente |
| B | React Bits — Flying Posters | https://reactbits.dev/components/flying-posters | Pôsteres 3D no scroll; `ogl@^1.0.11` | Rótulos históricos flutuando, somente como seção curta | alto / alto; WebGL e scroll infinito, fallback estático |
| C | React Bits — Dither | https://reactbits.dev/backgrounds/dither | Shader dither; `three`, R3F, postprocessing | Visual de retícula é pertinente, mas implementar em CSS/imagem em vez deste shader | muito alto / médio; GPU e movimento contínuo |
| A | Cult UI — Background Image Texture | https://cult-ui.com/docs/components/bg-image-texture | Texturas configuráveis; sem dependência externa | Base de papel, linho, açúcar/grão em seções | baixo / baixo |
| A | Cult UI — Cutout Card | https://cult-ui.com/docs/components/cutout-card | Recortes, pins e reveal; `motion`, Radix controllable-state | Cartão como etiqueta recortada de doce, selinho de preço/sabor | médio / médio; revelar ação também por foco/toque |
| A | Cult UI — Dither Image | https://cult-ui.com/docs/components/dither-image | Imagem com Bayer dither; `dither-plugin` | Fotos em retícula de jornal anos 1950 | médio / médio; preservar imagem/alt e limitar resolução |
| A | Cult UI — Animated SVG Shapes | https://cult-ui.com/docs/components/svg-shapes-animated | SVGs desenhados no scroll; `motion` | Arabescos, molduras e filetes de embalagem | baixo / médio; SVG decorativo e estado final no reduced-motion |
| A | Cult UI — Texture Card | https://cult-ui.com/docs/components/texture-card | Cartão texturizado; sem pacote externo | Fichas de receita e cartões de produto | baixo / baixo |
| B | Cult UI — Feature Carousel | https://cult-ui.com/docs/components/feature-carousel | Carrossel com transições; `motion` | Seleção “doces da semana”, controles manuais | médio / alto; teclado, pausa, status e sem autoplay |
| A | Eldora UI — Marquee | https://eldoraui.site/docs/components/marquee | Faixa infinita performática; CSS/React | Fita de embalagem com palavras e pequenos selos | baixo / médio; pausar/reduzir |
| A | Eldora UI — Font Weight Text | https://eldoraui.site/docs/components/font-weight-text | Peso tipográfico variável; `react` | Palavra-marca pulsando discretamente como impressão prensada | baixo / médio; fonte variável e fallback estático |
| A | Eldora UI — Gradual Spacing Text | https://eldoraui.site/docs/components/gradual-spacing-text | Tracking progressivo; `motion`, `react`, `clsx` | Título editorial em caixa-alta abrindo como rótulo | baixo / médio; uma vez, não em corpo |
| B | Eldora UI — Card Flip Hover | https://eldoraui.site/docs/components/card-flip-hover | Virada de cartão; `react` | Frente: doce; verso: história/ingredientes | médio / alto; botão explícito e teclado, nunca hover-only |
| B | Eldora UI — Wavy Text | https://eldoraui.site/docs/components/wavy-text | Ondulação tipográfica; `motion`, `react`, `clsx` | Uma palavra curta como “quentinho”/“feito hoje” | baixo / alto; risco vestibular e legibilidade |
| B | Eldora UI — SVG Ripple Effect | https://eldoraui.site/docs/components/svg-ripple-effect | Ondas SVG; `motion` | Anéis de café/leite como fundo de CTA | médio / médio; decorativo, reduzir frequência |
| C | Eldora UI — Photon Beam | https://eldoraui.site/docs/components/photon-beam | Feixes com `react`, `three` | Sem correspondência de marca; aparência tecnológica | alto / médio |

## Padrões recomendados (sem estética SaaS)

1. **Papel vivo:** textura estática + ruído leve; nada de gradiente neon, glassmorphism ou glow de “dashboard”.
2. **Rótulo em movimento:** Circular Text, Curved Loop ou marquee lento para selos, faixas e microcopy; no máximo um padrão contínuo por viewport.
3. **Revelação de impressão:** dither/pixel → fotografia nítida na primeira entrada, não em loop.
4. **Traço artesanal:** Highlighter ou Animated SVG Shapes para filetes, setas e sublinhados.
5. **Vitrine tátil:** Cutout Card ou Accordion Gallery, com foco/teclado equivalentes ao hover.

## Evidência e limitações

- **Magic UI:** registry shadcn oficial local (`apps/www/public/r/registry.json`), commit `ec1cce6` de 2026-09-08; contém descrição, dependências, registryDependencies e arquivos.
- **React Bits:** registry oficial (`public/r/registry.json`), commit `625f250` de 2026-09-09; 684 entradas porque cada componente é publicado em até quatro variantes. A contagem não representa 684 conceitos únicos.
- **Cult UI:** registry oficial (`apps/www/public/r/registry.json`), commit `3b85561` de 2026-07-22; descrições e dependências são explícitas.
- **Eldora UI:** registry oficial (`apps/www/public/r/registry.json`), commit `2ef4f1e` de 2026-03-19.
- **Aceternity UI:** 111 rotas foram extraídas do índice oficial `/components`. O repositório público `manuarora700/ui.aceternity` está obsoleto (commit de 2024 e só 19 arquivos), portanto a evidência atual foi a página oficial e seus code tabs; não há registry JSON público completo comparável aos outros quatro.
- URLs `/r/{name}.json` foram catalogadas para os registries que as declaram; disponibilidade remota pode variar com build/CDN. Para Aceternity, dependências devem ser confirmadas no code tab de cada componente escolhido.
