# DESIGN — Confeitaria Paganelli

## Estratégia
- Artefato: landing page de prospecção, não oficial.
- Público: moradores de Rio Preto, famílias e compradores de encomendas.
- Ação primária: telefonar / abrir rota.
- Adjetivos: tradicional, generosa, artesanal, direta, afetiva.
- Essência: **receita de tempo**.

## Sistema
- Estética: almanaque de confeitaria brasileira dos anos 1950 reinterpretado com fotografia editorial contemporânea.
- Display: Fraunces, alto contraste e personalidade histórica.
- Corpo: Manrope, legibilidade contemporânea.
- Escala: 1.25; base 16px.
- Cores: papel-leite `oklch(96% .025 86)`, cacau `oklch(23% .035 48)`, cereja `oklch(43% .15 24)`, massa `oklch(79% .12 75)`, verde-folha `oklch(44% .08 132)`.
- Unidade de espaço: 8px.
- Raios: 0 e 999px. Sem cards arredondados genéricos.
- Sombra: nenhuma; profundidade por sobreposição, borda e contraste.
- Signature move: carimbo oval inclinado + linhas de receita/pontilhado recorrentes.

## Layout e craft
- Hero assimétrico com headline sobre painel de papel e fotografia ocupando a direita.
- Seções densas como páginas de almanaque, com tipografia grande, faixas, índices e colunas.
- Imagens geradas são direção de arte conceitual e explicitamente identificadas.
- Ícones SVG próprios, traço 1.8, sem emojis.
- Motion: entrada por recorte vertical, ticker manualmente pausável, hover por deslocamento de 2px; apenas transform/opacity.
- Reduced motion remove deslocamentos, ticker e transições.
- Menu modal opaco com foco preso, Escape, scroll lock e retorno ao gatilho.

## Honestidade
- Página declarada como conceito independente.
- Não afirmar cardápio, preços, história detalhada, entrega ou depoimentos sem fonte.
- Informações públicas usadas: nome, categoria, endereço, telefone, nota e alegação pública “desde 1947” do perfil social, esta última atribuída.

## Slop audit
- Sem gradiente roxo, glass, cards idênticos, emoji, texto gradiente ou hero SaaS.
- Identidade, imagem e motion presentes.
- Densidade-alvo <= 2 px/caractere.
