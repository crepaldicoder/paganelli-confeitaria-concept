# Registries Tier 3 — HyperUI e Tailkit

> Escopo interpretado a partir dos dois registries explicitamente delegados: **HyperUI** e **Tailkit**. Consulta realizada em 09/09/2026, priorizando sites, documentação, sitemap e repositório oficiais.

## Classificação executiva

| Registry | Natureza / stack | Modelo e licença | Peso técnico | Adequação à landing editorial de confeitaria | Classificação |
|---|---|---|---|---|---|
| **HyperUI** | Blocos HTML sem framework, feitos para Tailwind CSS v4; marketing, aplicação, e-commerce, neobrutalismo e templates | Gratuito, open source, MIT; copiar e colar, sem pacote | **Muito leve**: markup e classes; JS só onde o comportamento exigir | **Alta**, especialmente Sections, Blog Cards, Product Cards/Collections, Testimonials, FAQ, CTA, Header/Footer | **Tier 3 recomendado / primeira escolha** |
| **Tailkit 5.1** | Biblioteca comercial de componentes Tailwind; HTML, React, Vue e Alpine, com áreas Application UI, Marketing, Ecommerce e Templates | Parte gratuita; catálogo completo requer acesso; licença proprietária (texto integral não apareceu no HTML estático consultado) | Leve nos blocos estáticos, mas variantes interativas são marcadas “JS required” e podem trazer Alpine/JS | **Média-alta** para Hero, About, Blog Lists/Posts, Newsletter, Testimonials, CTA e Footer | **Tier 3 seletivo / segunda escolha** |

## 1. HyperUI

### Fontes oficiais
- Site: https://hyperui.dev/
- Marketing: https://hyperui.dev/components/marketing
- Repositório: https://github.com/markmead/hyperui
- README/uso: https://github.com/markmead/hyperui#use-hyperui
- Licença MIT: https://github.com/markmead/hyperui/blob/main/LICENSE

### Inventário observado
O repositório oficial declara componentes gratuitos e open source para marketing, aplicações e e-commerce, sem pacote para instalar: escolher, copiar o markup e colar no projeto Tailwind. Na coleção `marketing`, o front matter registra cerca de **100 variantes em 22 famílias** (contagem do checkout consultado): announcements, banners, blog cards, buttons, cards, carts, contact forms, CTAs, empty content, FAQs, feature grids, footers, headers, logo clouds, newsletter signup, polls, pricing, product cards, product collections, sections, team sections e testimonials.

### Padrões úteis, implementação e adaptação anos 1950

| Padrão | URL oficial | Implementação leve | Adaptação “confeitaria editorial anos 1950” | Acessibilidade | Riscos |
|---|---|---|---|---|---|
| **Section com imagem e texto (1/2, 2/3, 3/2 ou split vertical)** | https://hyperui.dev/components/marketing/sections | `<section>` + Grid responsivo; imagem com dimensões/aspect ratio; sem JS | Composição assimétrica de anúncio impresso; papel creme, bordas retas cacau, foto quente, título condensado | Ordem DOM deve continuar lógica no mobile; `alt` descritivo; não inverter leitura só via CSS | Imagem genérica e excesso de whitespace tornam o bloco “template” |
| **Blog/editorial cards** | https://hyperui.dev/components/marketing/blog-cards | `<article>` com imagem, data, título, resumo e link; Grid CSS | Usar como “caderno de receitas/histórias”; variante de data rotacionada combina com recorte editorial, mas manter rotação discreta | Título do link deve ter nome discernível; datas em `<time datetime>`; foco visível; evitar overlay de baixo contraste | Cards idênticos viram grade genérica; efeitos hover não podem ser o único sinal |
| **Product cards / collections** | https://hyperui.dev/components/marketing/product-cards e https://hyperui.dev/components/marketing/product-collections | Figure/article + preço/CTA; nenhum JS para coleção estática | Transformar em vitrine de cookies com etiquetas de padaria, recortes de produto e hierarquia desigual | Não inventar preços; `alt`; nome e CTA claros; área clicável sem links aninhados | O padrão tende a e-commerce moderno; remover pills, gradientes e arredondamento excessivo |
| **Testimonials** | https://hyperui.dev/components/marketing/testimonials | `<figure><blockquote>…</blockquote><figcaption>` | Citação como recorte de jornal ou cartão de receita, não como três cards iguais | Citação e autoria reais; contraste; aspas decorativas ocultas de AT (`aria-hidden`) | Não usar depoimentos fictícios; estrelas sem rótulo acessível |
| **FAQ** | https://hyperui.dev/components/marketing/faqs | Preferir `<details><summary>` nativo; 3 variantes registradas | Linhas finas e cabeçalhos de caderno, sem acordeão “app” arredondado | Teclado nativo; foco visível; heading antes da lista; não remover marcador sem substituto claro | Se refeito com JS, exige ARIA/estado e pode regredir acessibilidade |
| **CTA / newsletter** | https://hyperui.dev/components/marketing/ctas e https://hyperui.dev/components/marketing/newsletter-signup | Form simples; newsletter registra dependência opcional `@tailwindcss/forms` | Faixa tipográfica estilo rótulo/embalagem; um CTA principal terracota | `<label>` persistente, `type=email`, mensagens de erro e sucesso, consentimento claro | Backend, privacidade e estados não vêm resolvidos pelo snippet |
| **Header / footer** | https://hyperui.dev/components/marketing/headers e https://hyperui.dev/components/marketing/footers | HTML sem framework; menu mobile exige JS mínimo | Wordmark central, filetes e navegação curta como cabeçalho de embalagem | Landmark `nav`, link “pular para conteúdo”, botão mobile com `aria-expanded` e nome | Snippet visual não garante focus trap/fechamento por Escape no menu |
| **Buttons** | https://hyperui.dev/components/marketing/buttons | `<a>` para navegação; `<button>` para ação; Tailwind puro | Botões retangulares como selos impressos; sombra deslocada curta e borda cacau | Alvo ≥44×44 px; `focus-visible`; não depender só de cor | Ícone isolado requer nome acessível; pills modernas conflitam com a estética |

## 2. Tailkit

### Fontes oficiais
- Site: https://tailkit.com/
- Componentes: https://tailkit.com/components
- Componentes gratuitos: https://tailkit.com/free-tailwind-components
- Documentação: https://tailkit.com/docs
- Instalação: https://tailkit.com/docs/getting-started/installation
- Configuração: https://tailkit.com/docs/getting-started/configuration
- Estrutura HTML: https://tailkit.com/docs/getting-started/html-structure
- Licença: https://tailkit.com/license
- Sitemap oficial: https://tailkit.com/sitemap.xml

### Inventário de marketing confirmado no sitemap
Hero, Main Headers, Page Headers, Footers, About, Blog Lists, Blog Posts, Comments, Contact, CTA, FAQ, Features, Image Overlays, Logos, Newsletter, Pricing, Statistics, Team, Testimonials, Page Separators, Content Sliders, Image Sliders; além de páginas completas Home, Features, Pricing, Contact e About.

### Padrões úteis, implementação e adaptação anos 1950

| Padrão | URL oficial | Implementação leve | Adaptação estética | Acessibilidade | Riscos |
|---|---|---|---|---|---|
| **Hero** | https://tailkit.com/components/marketing/sections/hero | Extrair apenas HTML/Tailwind da variante; evitar slider/vídeo se não necessário | Hero como capa de revista/rótulo: headline condensada, recorte fotográfico, filetes e selo | Um único `h1`; CTA com nome explícito; imagem responsiva; overlay com contraste | Catálogo pode induzir hero SaaS genérico e dependência de assets externos |
| **About / história** | https://tailkit.com/components/marketing/sections/about | Section + grid/figure, zero JS | Linha editorial “feito em casa” com foto documental e legenda | `figure/figcaption`; ordem DOM; texto alternativo | Não inventar tradição, datas ou processo comercial |
| **Blog Lists / Blog Posts** | https://tailkit.com/components/marketing/sections/blog-lists e https://tailkit.com/components/marketing/sections/blog-posts | Artigos sem estado; reaproveitar estrutura sem runtime | Receitas, bastidores e notas como caderno/jornal de bairro | Headings hierárquicos, `<article>`, `<time>`, links discerníveis | Página “blog” pode exceder escopo; manter só teaser editorial se não houver conteúdo real |
| **Page separators** | https://tailkit.com/components/marketing/sections/page-separators | CSS/SVG decorativo | Excelente como assinatura repetida: filete duplo, serrilha de embalagem ou estrela atômica | SVG decorativo com `aria-hidden=true`; não comunicar conteúdo só por separador | Ornamento demais reduz legibilidade e cria ruído vintage caricatural |
| **Testimonials / Statistics** | https://tailkit.com/components/marketing/sections/testimonials e https://tailkit.com/components/marketing/sections/statistics | HTML estático; sem carrossel | Um depoimento grande + dados reais, como anúncio editorial | Fontes/autorias e números verificáveis; lista semântica | Alto risco de conteúdo inventado; excluir se não houver evidência |
| **Newsletter / Contact** | https://tailkit.com/components/marketing/sections/newsletter e https://tailkit.com/components/marketing/sections/contact | Escolher variante HTML; integração de envio separada | Formulário tipo cupom postal/receituário | Labels, autocomplete, erros, sucesso, política; foco | Snippet não entrega backend, anti-spam ou consentimento |
| **Content/Image sliders** | https://tailkit.com/components/marketing/sections/content-sliders e https://tailkit.com/components/marketing/sections/image-sliders | **Evitar por padrão**; requer JS, estado e controles | Só usar se acervo fotográfico real justificar; visual de “slides” domésticos | Pausa, botões nomeados, teclado, status e reduced motion | Maior custo, jank, autoplay e problemas de leitura; inadequado como decoração |
| **Header / Footer** | https://tailkit.com/components/marketing/sections/main-headers e https://tailkit.com/components/marketing/sections/footers | Copiar só shell estático; menu mobile com JS mínimo | Cabeçalho de rótulo com navegação curta e bordas retas | Skip link, landmarks, `aria-expanded`, Escape e foco | Exemplos interativos no site podem estar marcados “JS required” |

## Padrões HTML/Tailwind leves recomendados (síntese)

1. **Estrutura editorial sem runtime:** `header` + `main` + seções com `article`, `figure`, `blockquote`, `details` e `footer`. Tailwind apenas para layout/estilo.
2. **Grade assimétrica:** `grid-cols-12`; destaque 7/5 ou 8/4, em vez de três cards iguais. No mobile, uma coluna e ordem DOM narrativa.
3. **Recorte fotográfico editorial:** `<figure class="relative">`, `aspect-*`, `object-cover`, legenda visível; sem imagem como mero background quando contém informação.
4. **Filete/serrilha como assinatura:** pseudo-elementos, borda dupla ou SVG pequeno; ocultar de leitores de tela.
5. **FAQ nativo:** `<details>` evita biblioteca JS e preserva teclado.
6. **Menu mobile mínimo:** botão real + poucas linhas de JS para `hidden`/`aria-expanded`; fechar em Escape e devolver foco.
7. **Entrada em scroll opcional:** `IntersectionObserver` alterando somente `opacity`/`transform`; fallback visível e `prefers-reduced-motion`.
8. **Tokens em vez de classes literais espalhadas:** mapear creme/cacau/terracota e tipografia condensada em tema/CSS variables, substituindo azul/cinza/rounded defaults dos snippets.

## Recomendação final

- **Basear a montagem em HyperUI**, por licença MIT, transparência do repositório, ausência de pacote e boa cobertura de padrões de marketing/e-commerce.
- **Usar Tailkit como referência seletiva**, especialmente Hero, About, Page Separators, Blog Lists e Footer; confirmar licença e direito de uso da variante antes de incorporar código premium.
- Copiar **estrutura**, não a identidade visual pronta. Remover azul SaaS, gradientes, pills, dark mode automático e grids uniformes; aplicar a direção aprovada “Rótulo de Forno”: creme, cacau, terracota, tipografia condensada, bordas retas e fotografia quente.
- Evitar sliders, carrosséis e dropdowns se o conteúdo não exigir interação.
- Todo snippet precisa de revisão de semântica, foco, contraste, 320 px, texto longo, `prefers-reduced-motion` e estados de formulário.

## Limitações da coleta

- Os sites principais retornaram bloqueio HTTP 403 para a coleta direta inicial; a verificação foi completada pelo repositório oficial do HyperUI, pelo sitemap oficial do Tailkit e por páginas oficiais acessíveis com user agent de navegador.
- A página de licença do Tailkit exibiu título/data no HTML estático, mas não o corpo do acordo (provavelmente renderizado no cliente). Portanto, não foi atribuído um tipo de licença específico sem evidência; deve-se confirmar no navegador autenticado antes de copiar componentes premium.
