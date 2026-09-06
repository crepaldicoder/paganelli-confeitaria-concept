# DESIGN — Confeitaria Paganelli

## Estratégia
- Artefato: landing page de prospecção, não oficial.
- Público: moradores de Rio Preto, famílias e compradores de encomendas.
- Ação primária: conversar pelo WhatsApp, telefonar ou abrir rota.
- Adjetivos: tradicional, generosa, artesanal, direta, afetiva.
- Essência: **receita de tempo**.

## Sistema
- Estética: almanaque de confeitaria brasileira dos anos 1950 reinterpretado com fotografia editorial contemporânea.
- Display: Fraunces, alto contraste e personalidade histórica.
- Corpo: Manrope, legibilidade contemporânea.
- Escala: 1.25; base 16px.
- Cores ajustadas às referências públicas do espaço: papel-creme, ameixa escura, rosa-framboesa e ciano da fachada. A estrutura editorial original foi preservada.
- Logo: lettering “Paganelli” reconstruído como SVG vetorial a partir da fotografia pública da fachada fornecida pelo usuário; arquitetura, céu e sombra solar não fazem parte do vetor.
- Unidade de espaço: 8px.
- Raios: 0 e 999px. Sem cards arredondados genéricos.
- Sombra: pontual e direcional apenas em fotografia e marca; profundidade principal por sobreposição, molduras e contraste.
- Signature move: a página é construída como uma receita — traço caligráfico, linhas de costura, véus de imagem e capítulos encadeados.
- Desktop: composição editorial explícita em grid, com larguras mínimas por coluna, densidade preservada e bloco de visita em quatro atos — título, endereço, rota visual e contato.

## Layout e craft
- Hero assimétrico com headline sobre painel de papel e fotografia ocupando a direita.
- Seções densas como páginas de almanaque, com tipografia grande, faixas, índices e colunas.
- Imagens geradas são direção de arte conceitual e explicitamente identificadas.
- Ícones SVG próprios, traço 1.8, sem emojis.
- CTA de localização: card cartográfico com perspectiva e rota desenhada, transposto do padrão Expanded Map pesquisado no 21st.dev para CSS/SVG local, sem dependência externa.
- WhatsApp: ação flutuante persistente com rótulo no desktop, alvo mínimo de 58px no mobile e movimento de entrada único.
- Motion: intro cinematográfica, desenho progressivo do SVG, preenchimento assentado, títulos construídos com folga para acentos/descendentes, linhas caligráficas, véus sobre imagens, capítulos encadeados, progresso e parallax leve. Mídia estrutural permanece visível se o observer falhar.
- Imagens editoriais de interior e vitrine foram geradas com GPT Image 2 a partir de referências públicas e aparecem explicitamente como direção de arte conceitual, não documentação do espaço/cardápio atual.
- Mobile: galeria de atmosfera, avaliações e guia usam trilhos com snap e próxima peça visível; a galeria possui indicador sincronizado com swipe real.
- Reduced motion remove a construção, deslocamentos, ticker e transições, deixando logo e textos completos imediatamente visíveis.
- Menu modal opaco com foco preso, Escape, scroll lock e retorno ao gatilho.
- Avaliações: capítulo editorial com nota 4,7 do Maps e três trechos públicos atribuídos, incluindo origem e antiguidade.

## Honestidade
- Página declarada como conceito independente.
- Não afirmar cardápio, preços, história detalhada ou entrega sem fonte; avaliações reproduzidas apenas com autoria, origem e antiguidade explícitas.
- Informações públicas usadas: nome, categoria, endereço, telefone, nota e alegação pública “desde 1947” do perfil social, esta última atribuída.

## Slop audit
- Sem gradiente roxo, glass, cards idênticos, emoji, texto gradiente ou hero SaaS.
- Identidade, imagem e motion presentes.
- Densidade-alvo <= 2 px/caractere.
