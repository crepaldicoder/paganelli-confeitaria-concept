# Pesquisa de motion — Paganelli

Data: 2026-09-10

## Critério

A identidade aprovada é “Receita de Tempo”: almanaque de confeitaria brasileira dos anos 1950, papel, tinta, fotografia editorial e capítulos encadeados. As referências abaixo foram avaliadas por aderência à marca, função narrativa, custo de runtime, reduced motion, mobile e compatibilidade com Vite/CSS/JavaScript sem React.

## Referências principais

| Padrão | Fonte | Uso decidido |
|---|---|---|
| Paper Texture | https://21st.dev/@paper-design/components/paper-texture | **Escolhido como princípio.** O shader WebGL foi substituído por grão SVG já existente, deslocado 4–6px pelo progresso de leitura. |
| Paper Texture · Abstract | https://21st.dev/@paper-design/components/paper-texture-abstract | Referência de materialidade; rejeitado como implementação por custo e linguagem abstrata demais. |
| Text Reveal (Mask) | https://21st.dev/@soralabs/components/text-reveal-mask | Mantida a escrita/máscara existente, mais específica à marca; não duplicar fade de palavras. |
| Scroll Reveal Image | https://21st.dev/@unlumen/components/scroll-reveal-image | **Escolhido como princípio.** Profundidade progressiva e zoom leve transpostos para os frames retangulares existentes, sem spring e sem border-radius. |
| Text Parallax Content | https://21st.dev/@uniquesonu/components/text-parallax-content-scroll | Referência de narrativa contínua; transposto para capítulos e fotografias, sem sticky longo. |
| Magnetic Button | https://21st.dev/@hirael/components/magnetic-button | **Escolhido.** Atração limitada a 7×5px, apenas em ponteiro fino e fora de reduced motion. |
| Animated Grid Pattern | https://magicui.design/docs/components/animated-grid-pattern | Boa associação com azulejo/embalagem, mas rejeitado para não introduzir uma segunda assinatura concorrente. |
| Noise Background | https://ui.aceternity.com/components/noise-background | Confirma a direção de grão; implementação externa não foi copiada. |
| Background Image Texture | https://cult-ui.com/docs/components/bg-image-texture | Confirma textura estática/leve como base apropriada para superfícies creme e vinho. |
| Dither | https://reactbits.dev/backgrounds/dither | Retícula pertinente, shader rejeitado por GPU e movimento contínuo; o site já usa véu pontilhado CSS de uma execução. |

## Referências narrativas e de microinteração

- The Boat, SBS — https://www.sbs.com.au/theboat/ — continuidade entre cenas e handoffs, sem tratar cada seção como efeito isolado.
- Shorthand, scrollytelling — https://shorthand.com/the-craft/scrollytelling-examples/index.html — capítulos de estado e mídia que muda de função.
- MDN, Intersection Observer — https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API — disparos fail-open e sem polling constante.
- MDN, scroll-driven animations — https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations — referência para relações contínuas com scroll; foi mantido fallback via requestAnimationFrame por compatibilidade.
- Bonne Maman — https://bonnemaman.us/ — materialidade de alimento, hover contido e transições curtas.
- Fishwife — https://eatfishwife.com/ — ilustração/editorialidade forte com microinterações, sem hierarquia SaaS.

## Motion map implementado

1. **Fundo vivo:** a textura impressa fixa responde ao scroll; não existe loop autônomo, vídeo ou canvas.
2. **Handoffs de cor:** rosa, ciano e vinho recebem uma camada de registro sutil que se desloca com a posição da cena.
3. **Fotografias:** a máscara já existente permanece; após revelar, cada imagem ganha profundidade individual de até 22px e variação de escala de 1.035–1.053 no desktop.
4. **Capítulos:** o label do progresso troca com um flip curto quando o capítulo ativo muda.
5. **CTAs:** os botões primários respondem ao cursor em deslocamento restrito; touch continua estável.
6. **Reduced motion/mobile:** fundo e painéis ficam estáticos; paralaxe e atração magnética são removidas; conteúdo permanece completo.

## Rejeitados

- partículas, meteors, ripples decorativos e cursores customizados;
- WebGL/shaders contínuos;
- zoom agressivo, sticky scenes longas e parallax 3D;
- neon, glass, gradientes tecnológicos e grids de dashboard;
- dependências React, Framer Motion, GSAP ou Three.js para efeitos reproduzíveis em CSS/JS nativo.
