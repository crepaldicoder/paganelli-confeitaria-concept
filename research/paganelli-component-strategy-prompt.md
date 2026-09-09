# Paganelli — pesquisa profunda de componentes e prompt de implementação

## Objetivo

Selecionar ideias de componentes para evoluir a landing page da Confeitaria Paganelli sem transformar a experiência em um catálogo de efeitos. A direção continua sendo **almanaque de confeitaria brasileira dos anos 1950 + fotografia editorial contemporânea**, com a página construída como uma receita: traço, camadas, tempo e assentamento.

## Método executado

1. Leitura de `DESIGN.md` e do briefing de scraping enviado.
2. Consulta de fontes oficiais antes de agregadores.
3. Teste de 29 endpoints JSON em Magic UI, Aceternity UI e Eldora UI.
4. Confirmação de 22 endpoints válidos, com metadados, dependências e arquivos catalogados em `deep-registry-catalog.json`.
5. Quatro buscas temáticas no 21st.dev, totalizando 80 resultados de descoberta para narrativa, galeria, avaliações, localização e CTAs.
6. Filtragem por aderência à marca, acessibilidade, custo técnico, performance e compatibilidade com a implementação Vanilla/Vite existente.

## Shortlist — componentes a aproveitar como referência

### A. Alta prioridade

#### 1. Scroll Reveal Content A — 21st.dev #19203
- Fonte: https://21st.dev/@abui/components/scroll-reveal-content-a
- Ideia útil: número, texto, progresso e imagem sincronizados.
- Aplicação: transformar os capítulos da página em uma sequência realmente conectada.
- Adaptação: trocar a linha genérica de progresso por uma “linha de receita” contínua que avança somente entre pontos semanticamente relacionados.
- Implementação sugerida: CSS custom property atualizada por `requestAnimationFrame`, `IntersectionObserver` para ativação e fallback estático.

#### 2. Horizontal Feature Reveal — 21st.dev #26062
- Fonte: https://21st.dev/@hyperiux/components/horizontal-feature-reveal
- Ideia útil: scroll vertical conduzindo uma composição editorial horizontal com texto e imagem.
- Aplicação: seção “Uma atmosfera que também alimenta”.
- Adaptação: no desktop, mídia fixa e legendas/editoriais em sucessão; no mobile, trilho horizontal real com snap, drag e próxima foto visível.
- Restrição: não usar SplitText proprietário nem esconder conteúdo estrutural.

#### 3. Sticky Scroll Reveal — Aceternity UI
- Registry: https://ui.aceternity.com/registry/sticky-scroll-reveal.json
- Ideia útil: mídia persistente sincronizada com blocos narrativos.
- Aplicação: história/ofício, desde que existam imagens suficientes e cada troca comunique uma etapa real.
- Adaptação: moldura reta, papel-creme, índices tipográficos e fotografia sem cards genéricos.

#### 4. Scroll Reveal Image — 21st.dev #24466
- Fonte: https://21st.dev/@unlumen/components/scroll-reveal-image
- Ideia útil: imagem que ganha presença à medida que entra em cena.
- Aplicação: imagens editoriais e a torta isolada.
- Adaptação: revelar por véu/máscara e assentamento de sombra, sem animar raio de borda.

#### 5. Parallax Scroll — Aceternity UI
- Registry: https://ui.aceternity.com/registry/parallax-scroll.json
- Dependência declarada: `motion`.
- Ideia útil: colunas de imagens em velocidades distintas.
- Aplicação: atmosfera, somente em telas largas.
- Adaptação: amplitude pequena, sem inclinações 3D; desligar completamente em movimento reduzido e no mobile.

#### 6. Editorial Testimonial — 21st.dev #9637
- Fonte: https://21st.dev/@jatin-yadav05/components/editorial-testimonial
- Ideia útil: avaliação tratada como conteúdo editorial, não como card SaaS.
- Aplicação: seção de avaliações.
- Adaptação: uma citação principal, duas secundárias, autoria/origem/antiguidade visíveis e navegação manual no mobile.

#### 7. Reviews Carousel — 21st.dev #18924
- Fonte: https://21st.dev/@educalvolpz/components/reviews-carousel
- Ideia útil: teclado, indicadores e pilha animada.
- Aplicação: comportamento acessível da avaliação mobile.
- Adaptação: retirar autoplay, avatares fictícios e cartões arredondados; manter teclado, swipe e indicador sincronizado.

#### 8. Location Card — 21st.dev #7902
- Fonte: https://21st.dev/@lavikatiyar/components/location-card
- Ideia útil: endereço, contexto visual e CTA integrados.
- Aplicação: bloco “Visite”.
- Adaptação: preservar o mapa editorial já existente e melhorar a hierarquia de endereço, rota, telefone e estado de hover/focus.

#### 9. Book A Call Button — 21st.dev #5801
- Fonte: https://21st.dev/@jatin-yadav05/components/book-a-call-button
- Ideia útil: transição curta do ícone dentro de um CTA estável.
- Aplicação: telefone e WhatsApp.
- Adaptação: usar SVG próprio, deslocamento de 3–5px, pressão tátil e sombra offset; sem pill genérica.

#### 10. Section CTA — 21st.dev #19343
- Fonte: https://21st.dev/@soralabs/components/section-cta
- Ideia útil: label e ícone com movimento coordenado.
- Aplicação: links editoriais “Conheça”, “Abrir rota” e “Falar no WhatsApp”.
- Adaptação: manter retângulos retos e microinteração de 160–220ms.

### B. Prioridade média

- **Text Reveal — Magic UI:** https://magicui.design/r/text-reveal.json — usar no máximo em um manifesto curto; não aplicar em todos os títulos.
- **Blur Fade — Magic UI:** padrão válido, mas evitar blur excessivo; preferir máscara vertical ou opacidade simples.
- **Scroll Progress — Magic UI:** https://magicui.design/r/scroll-progress.json — transformar em marcador editorial discreto, não barra tecnológica.
- **Direction Aware Hover — Aceternity:** https://ui.aceternity.com/registry/direction-aware-hover.json — somente desktop e apenas se a legenda realmente precisar aparecer sobre a fotografia.
- **Infinite Moving Cards — Aceternity:** https://ui.aceternity.com/registry/infinite-moving-cards.json — aproveitar apenas a lógica de duplicação/loop; rejeitar para avaliações porque leitura e autoria exigem pausa e controle.
- **Animated List — Magic UI/Eldora:** útil para sequência de preparo ou benefícios verificáveis; hoje não há conteúdo factual suficiente para justificar sua inclusão.
- **Marquee — Magic UI/Eldora:** manter somente faixas curtas de vocabulário da marca; nunca duplicar texto crítico.
- **Tailkit image slider/testimonials:** referência estrutural leve para fallback sem JavaScript complexo.
- **HyperUI marketing patterns:** fonte de HTML semântico para CTAs e navegação, não de identidade visual.

## Componentes rejeitados para esta marca

- Animated Beam e Background Beams: linguagem de fluxo de dados/SaaS.
- Border Beam e Spinning Border Button: brilho tecnológico incompatível.
- Canvas Reveal Effect: custo visual e computacional sem relação com confeitaria.
- Meteors, partículas e backgrounds pontilhados: decoração sem significado.
- Tactile WebGL Button: dependência pesada e distração para ação simples.
- 3D Parallax Unfurling Gallery: risco de enjoo, jank e protagonismo excessivo.
- Circular Split Roll: forma circular compete com a torta e prejudica a leitura.
- Scroll Burn Text: linguagem agressiva e glitch incompatível com a marca afetiva.
- Autoplay em avaliações: reduz controle de leitura.
- Cards arredondados repetidos, glassmorphism, gradientes SaaS, pills em excesso e ícones emoji.

---

# Prompt final de implementação

```text
Você é um diretor de arte digital e engenheiro frontend sênior. Trabalhe no projeto existente da landing page da Confeitaria Paganelli. Não redesenhe a página do zero e não descarte composições já aprovadas. Preserve o conteúdo, identidade, assets, links, acessibilidade e comportamento funcional atuais; evolua a experiência por meio de componentes e padrões de motion cuidadosamente adaptados.

OBJETIVO
Transformar a página em uma narrativa contínua de “receita construída pelo tempo”: o traço do lettering inicia a história, capítulos se conectam, imagens se revelam como camadas de preparo e cada cena assenta antes da próxima. O resultado deve parecer uma publicação editorial brasileira de confeitaria dos anos 1950 reinterpretada com fotografia contemporânea — nunca um template SaaS.

CONTEXTO VISUAL BLOQUEADO
- Essência: receita de tempo.
- Personalidade: tradicional, generosa, artesanal, direta e afetiva.
- Display: Fraunces; corpo: Manrope.
- Paleta existente: papel-creme, ameixa escura, rosa-framboesa, rosa pastel #E5838C e ciano da fachada.
- Raios permitidos: 0 e 999px apenas quando semanticamente circular.
- Profundidade: sobreposição, molduras editoriais e sombras direcionais; sem glassmorphism.
- Ícones: SVG consistentes; nunca emoji ou Unicode decorativo.
- Preserve o logo oficial/reconstruído e sua geometria. Não redesenhe lettering.

PRINCÍPIO DE USO DOS COMPONENTES
Os componentes pesquisados são referências de comportamento, não kits visuais para copiar literalmente. Extraia a lógica útil e reescreva-a dentro do sistema existente. Não instale React, Tailwind, Framer Motion ou GSAP se o mesmo resultado puder ser executado com CSS, IntersectionObserver e requestAnimationFrame. Não execute código remoto sem revisão.

REFERÊNCIAS APROVADAS
1. Scroll Reveal Content A — https://21st.dev/@abui/components/scroll-reveal-content-a
2. Horizontal Feature Reveal — https://21st.dev/@hyperiux/components/horizontal-feature-reveal
3. Sticky Scroll Reveal — https://ui.aceternity.com/registry/sticky-scroll-reveal.json
4. Scroll Reveal Image — https://21st.dev/@unlumen/components/scroll-reveal-image
5. Parallax Scroll — https://ui.aceternity.com/registry/parallax-scroll.json
6. Editorial Testimonial — https://21st.dev/@jatin-yadav05/components/editorial-testimonial
7. Reviews Carousel — https://21st.dev/@educalvolpz/components/reviews-carousel
8. Location Card — https://21st.dev/@lavikatiyar/components/location-card
9. Book A Call Button — https://21st.dev/@jatin-yadav05/components/book-a-call-button
10. Section CTA — https://21st.dev/@soralabs/components/section-cta
11. Text Reveal — https://magicui.design/r/text-reveal.json
12. Scroll Progress — https://magicui.design/r/scroll-progress.json

ANTES DE EDITAR
1. Leia DESIGN.md, main.js, style.css, desktop-rework.css e refinement.css.
2. Rode o site e capture o estado atual em 1440, 768, 375 e 320px após a intro.
3. Faça inventário de seções, CTAs, imagens, legendas, microtextos e animações existentes.
4. Identifique colisões, elementos decorativos sem função, imagens que ainda não revelam ao entrar e transições sem continuidade.
5. Preserve a composição atual sempre que ela já resolver o conteúdo. Nenhuma alteração global de identidade sem justificativa.

ARQUITETURA DE MOTION
Crie um único sistema com quatro famílias:

A. TRAÇO
- O lettering da abertura desenha e assenta.
- Uma linha de receita pode conectar capítulos reais, mas só aparece entre pontos relacionados.
- Nada de linhas isoladas, rabiscos aleatórios ou sublinhados sem função.

B. VÉU
- Fotografias entram por máscara/clip em wrapper, nunca deixando o próprio elemento observado com área zero.
- A mídia deve revelar quando ela própria entra no viewport.
- Se o observer falhar, a imagem permanece visível.

C. ASSENTAMENTO
- Produtos isolados, como a torta, podem entrar com translate + rotate + scale e finalizar com sombra direcional.
- Transform e opacity apenas; não anime layout, width, height, top ou left.
- Duração entre 700 e 1150ms, easing cubic-bezier(.16,1,.3,1).

D. PASSAGEM
- A saída de uma cena deve antecipar a entrada da seguinte por mudança de cor, alinhamento ou continuidade de imagem.
- Não repetir fade-up genérico em todos os elementos.

IMPLEMENTAÇÕES SOLICITADAS

1. PROGRESSO EDITORIAL
- Adapte Scroll Progress/Scroll Reveal Content para um marcador discreto ligado aos capítulos.
- O progresso não pode parecer barra de carregamento de aplicativo.
- Atualize com RAF throttling; nenhuma leitura/escrita de layout em loop descontrolado.

2. SEÇÃO “O OFÍCIO”
- Considere Sticky Scroll Reveal apenas se cada bloco representar uma etapa real e já existente no conteúdo.
- Mídia fixa à direita no desktop e sequência linear no mobile.
- Não invente processos, receitas, ingredientes ou datas.

3. “UMA ATMOSFERA QUE TAMBÉM ALIMENTA”
- Adapte Horizontal Feature Reveal/Parallax Scroll.
- Desktop: composição editorial assimétrica, imagens com parallax máximo de 4–7% e legendas em áreas próprias.
- Mobile: trilho horizontal com scroll-snap, swipe/drag real, próxima imagem parcialmente visível e indicador sincronizado.
- Todas as imagens da galeria devem manter dimensão e proporção uniformes.
- Não use wheel hijacking nem scroll horizontal forçado no desktop.

4. “DO DOCE AO SALGADO”
- Preserve fundo #E5838C.
- Número, título, texto e aba telefônica à esquerda no desktop; torta PNG transparente à direita.
- A torta entra e assenta à direita com sombra natural.
- No mobile: cabeçalho fixo nunca cobre o título; sequência clara de capítulo, título, texto, telefone e torta.

5. AVALIAÇÕES
- Adapte Editorial Testimonial + comportamento acessível de Reviews Carousel.
- Desktop: uma avaliação principal e duas secundárias, com tipografia editorial, sem três cards genéricos iguais.
- Mobile: swipe real, botões anterior/próximo, indicador textual ou pontos acessíveis e teclado.
- Sem autoplay. Preserve autoria, fonte, nota e antiguidade.

6. CTAs
- Adapte Book A Call Button e Section CTA.
- Pressão imediata em 100–180ms; hover/focus em 160–220ms.
- Ícone desloca 3–5px dentro do botão, sem mover texto ou alterar largura.
- Alvos de toque mínimos de 44x44px; WhatsApp flutuante mínimo de 58px.
- Estado focus-visible tão claro quanto hover.
- O logo do WhatsApp deve ser SVG reconhecível e contido, sem emoji.

7. BLOCO “VISITE”
- Use Location Card somente como referência de hierarquia.
- Preserve o mapa editorial existente.
- Organize endereço, rota, telefone e ação principal em ordem de decisão.
- Links devem abrir destinos reais e corretos.

MICROTEXTO E COLISÕES
- Legendas, eyebrows, fontes, capítulos, indicadores e selos precisam de faixas próprias.
- Proíba position:absolute para texto informativo quando o container não reservar espaço.
- Verifique acentos, itálicos, descendentes, máscaras e line-height.
- Nenhum microtexto pode cruzar imagem, botão, título, header fixo ou outro microtexto.
- Remova qualquer linha, ponto ou ornamento que não codifique hierarquia, continuidade ou ação.

PROIBIÇÕES
- Não usar beams, meteors, partículas, WebGL, glitch, neon, gradientes tecnológicos ou canvas decorativo.
- Não usar cards arredondados repetidos, glass, badges genéricos ou layout de dashboard.
- Não usar autoplay para avaliações ou galeria.
- Não usar animação por palavra em títulos mobile se isso alterar quebras aprovadas.
- Não esconder conteúdo crítico até JavaScript rodar.
- Não substituir fotos reais nem gerar imagens sem autorização e aviso de custo.
- Não inventar cardápio, preços, horários, entrega, ingredientes, história ou avaliações.

ACESSIBILIDADE E REDUCED MOTION
- prefers-reduced-motion deve eliminar parallax, scrub, grandes deslocamentos e loops.
- Conteúdo e imagens aparecem imediatamente no estado final.
- Menu móvel: foco preso, Escape, scroll lock e retorno ao gatilho.
- Carrosséis: controles nomeados, teclado, toque e indicador atualizado.
- Contraste AA para texto e controles.

RESPONSIVIDADE
- Testar obrigatoriamente 1440px, 768px, 375px e 320px.
- Cabeçalho móvel permanece fixed/sticky, estável e sem blur/jank.
- Nenhum overflow horizontal não intencional.
- Em trilhos intencionais, o overflow deve ficar restrito ao componente.
- Verificar orientação vertical, touch drag e estados ativo/focus.

PERFORMANCE
- Priorizar transform e opacity.
- Um único listener de scroll passivo e RAF compartilhado, se necessário.
- IntersectionObserver para entradas discretas.
- Lazy-load de mídia abaixo da dobra quando seguro.
- Evitar dependências novas; justificar qualquer pacote adicionado.

PROCESSO DE ENTREGA
1. Criar um plano curto por seção e listar o componente de referência usado.
2. Implementar uma família de motion por vez.
3. Rodar build real.
4. Servir localmente e percorrer toda a página para disparar reveals.
5. Capturar screenshots pós-reveal em 1440, 768, 375 e 320px.
6. Testar mouse, teclado, toque, drag, menu, scroll lock e reduced motion.
7. Auditar console, page errors, imagens quebradas, links, âncoras, overflow e colisões de microtexto.
8. Comparar antes/depois e remover pelo menos um efeito que pareça excessivo.
9. Publicar somente após aprovação visual real.
10. Verificar novamente a URL de produção anônima.

CRITÉRIOS DE ACEITE
- A página conta uma história contínua, não uma coleção de efeitos.
- Cada linha decorativa tem função ou foi removida.
- Cada imagem revela ao entrar e permanece visível em fallback/reduced motion.
- Nenhum texto pequeno sobrepõe outro elemento.
- A atmosfera mantém galeria uniforme e usável por toque.
- A torta termina isolada à direita no desktop e bem enquadrada no mobile.
- Avaliações são legíveis, controláveis e corretamente atribuídas.
- CTAs parecem táteis sem parecer tecnológicos.
- Zero console errors, zero imagens quebradas e zero overflow horizontal acidental.
- Build concluído e produção validada em 1440, 768, 375 e 320px.

Ao terminar, entregue:
- resumo das decisões por seção;
- componentes usados como referência e como foram adaptados;
- arquivos alterados;
- resultados reais de build e QA;
- URL de produção verificada.
```

## Arquivos da pesquisa

- `research/deep-registry-catalog.json` — 29 endpoints oficiais testados e 22 válidos.
- `research/component-research.json` — seleção inicial aplicada ao site.
- `research/paganelli-component-strategy-prompt.md` — este documento e prompt final.
