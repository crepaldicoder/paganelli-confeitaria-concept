## Resultado: registries Tier 2

Raspei as páginas oficiais do **shadcn/ui Directory**, **Shadcnblocks** e **Origin UI** — atualmente redirecionado e renomeado para **coss.com/ui**. A classificação abaixo considera utilidade para landing editorial de confeitaria, compatibilidade, dependências, esforço de adaptação e risco.

### Ranking dos registries

| Registry | Classificação | Aplicabilidade | Síntese |
|---|---:|---:|---|
| **Shadcnblocks** | **A — recomendado** | Muito alta | Melhor cobertura pronta para hero, narrativa de scroll, galeria, avaliações, CTA e visita |
| **shadcn/ui Directory** | **B — infraestrutura/descoberta** | Média-alta | Melhor API e governança de registry; não é, isoladamente, uma coleção editorial |
| **Origin UI / COSS UI** | **C — primitives auxiliares** | Média-baixa | Bom para controles menores, mas sem blocos editoriais equivalentes aos do Shadcnblocks |

---

## 1. Shadcnblocks — prioridade principal

**URL:** https://www.shadcnblocks.com/  
**Instalação:** `npx shadcn add @shadcnblocks/<nome>`  
**Stack declarada:** React, Tailwind CSS, shadcn/ui; suporte a **Base UI ou Radix UI** conforme `components.json`.  
**Modelo:** código copiado para o projeto, não pacote opaco. Funciona, segundo a documentação oficial, com Next.js, Astro, Remix e Vite.

### Componentes mais aplicáveis

| Prioridade | Nome / item | URL | Dependências prováveis | Adaptação estética | Riscos | Evidência oficial |
|---|---|---|---|---|---|---|
| **A** | **Process 2 — Scroll-driven process with image transitions** | https://www.shadcnblocks.com/block/process2 | shadcn/ui, Tailwind, React; provável JS de scroll/transição | Transformar etapas em “massa → forno → recheio → vitrine”; fotos quentes, fundos creme, bordas retas | **Pro**; conferir reduced motion, sticky behavior e desempenho de imagens | Catálogo oficial identifica `process2` e a descrição; grupo Process possui 4 itens |
| **A** | **Gallery 41 — Captioned two column gallery** | https://www.shadcnblocks.com/block/gallery41 | React/Tailwind; baixa interatividade | Excelente para grid editorial com legendas de sabores e bastidores | **Pro**; otimização e aspect ratio das imagens | Item e descrição extraídos do catálogo oficial |
| **A** | **Gallery 49 — Polaroid collage grid** | https://www.shadcnblocks.com/block/gallery49 | React/Tailwind | Boa assinatura artesanal se a “polaroid” virar ficha/etiqueta de fornada | **Pro**; pode parecer decorativo ou juvenil se exagerado | Catálogo oficial lista `gallery49` |
| **A** | **Gallery 43 — Lightbox image grid** | https://www.shadcnblocks.com/block/gallery43 | Dialog/lightbox; possivelmente primitive shadcn | Galeria de produtos e detalhes de textura | **Pro**; foco, teclado, zoom e peso de imagens devem ser auditados | Catálogo oficial lista `gallery43` |
| **A** | **Testimonial 18 — Featured quote with star rating** | https://www.shadcnblocks.com/block/testimonial18 | Ícones, React/Tailwind | Uma avaliação principal, tipografia editorial grande e estrelas em terracota | **Pro**; não inventar depoimentos ou notas | Catálogo oficial identifica título e acesso |
| **A** | **Testimonial 10 — Single centered quote** | https://www.shadcnblocks.com/block/testimonial10 | React/Tailwind; dependência mínima | Melhor opção gratuita e sóbria para uma citação real | **Grátis**; prova social reduzida se houver apenas uma fonte | Catálogo oficial marca `testimonial10` como `free` |
| **A** | **Contact 6 — Contact channels, form, and office hours** | https://www.shadcnblocks.com/block/contact6 | Form/Input e ícones | Remover formulário se desnecessário; usar WhatsApp, telefone, endereço e horários verificados | **Pro**; dados comerciais precisam ser confirmados; formulário aumenta escopo e privacidade | Catálogo oficial identifica exatamente canais e horários |
| **A** | **Contact 7 — Grid of contact method cards** | https://www.shadcnblocks.com/block/contact7 | Card, Button, ícones | Alternativa gratuita para WhatsApp, ligar e visitar | **Grátis**; cards genéricos exigem forte restyling editorial | Catálogo oficial marca `contact7` como `free` |
| **A** | **CTA 10 — Banded CTA with dual buttons** | https://www.shadcnblocks.com/block/cta10 | Button, React/Tailwind | Dois botões explícitos: “Pedir pelo WhatsApp” e “Ligar agora” | **Grátis**; garantir `wa.me` e `tel:` corretos e foco visível | Catálogo oficial marca `cta10` como `free` |
| **A** | **CTA 26 — Photo banner CTA with link cards** | https://www.shadcnblocks.com/block/cta26 | Imagem, cards/buttons | Ótimo encerramento “Venha provar”: foto da loja + WhatsApp/telefone/mapa | **Pro**; overlays podem prejudicar contraste | Catálogo e exemplo oficial de CLI: `npx shadcn add @shadcnblocks/cta26` |
| **B** | **Hero 203 — Editorial hero with twin dotted magazine lifts** | https://www.shadcnblocks.com/block/hero203 | React/Tailwind; provável motion leve | Estrutura editorial coerente com confeitaria autoral; substituir estética tech por materialidade de rótulo | **Pro**; ornamentos pontilhados podem competir com identidade existente | Catálogo oficial descreve explicitamente como editorial |
| **B** | **Hero 157 — Photo hero anchored with architectural headline** | https://www.shadcnblocks.com/block/hero157 | React/Tailwind, imagem | Headline condensada + fotografia quente de produto/loja | **Pro**; composição depende muito da fotografia | Catálogo oficial identifica item e descrição |
| **B** | **Hero 3 — Split hero with review strip and tall photography** | https://www.shadcnblocks.com/block/hero3 | React/Tailwind, estrelas/avatares | Conecta produto e prova social já na abertura | **Grátis**; risco de hero convencional e review não verificável | Catálogo oficial marca `hero3` como `free` |
| **B** | **Hero 304 — Sticky Narrative Hero With Offset Cards** | https://www.shadcnblocks.com/block/hero304 | Sticky/scroll, React/Tailwind | Forte para narrativa de origem e fabricação | **Pro**; maior complexidade mobile, motion e CLS | Catálogo oficial identifica item como narrativa sticky |
| **B** | **Reviews 1 — Customer review list with average rating** | https://www.shadcnblocks.com/block/reviews1 | Rating/list, ícones | Útil se houver avaliações reais e média comprovável | **Grátis**; média e volume precisam de fonte; estrutura pode parecer ecommerce | Catálogo oficial marca `reviews1` como `free` |
| **C** | **Gallery 25 — Animated masonry photo grid** | https://www.shadcnblocks.com/block/gallery25 | Layout masonry + animação | Visual rico para variedade de produtos | **Pro**; maior risco de jank, ordem de leitura e CLS | Catálogo oficial identifica animação masonry |
| **C** | **Gallery 7 — Auto-scrolling image carousel with text intro** | https://www.shadcnblocks.com/block/gallery7 | Carousel/autoplay | Pode criar ritmo entre capítulos | **Pro**; autoplay, acessibilidade e reduced motion exigem revisão | Catálogo oficial identifica auto-scroll |

### Cobertura verificada do catálogo

- **Hero:** 285 blocos na página principal; a captura detalhada atual retornou 285 itens.
- **Gallery:** página anunciava 52; extração identificou 52 itens.
- **Testimonial:** 39 itens.
- **Reviews:** 14 itens.
- **Contact:** página anunciava 30; extração identificou 30 itens.
- **CTA:** página anunciava 38; extração identificou 38 itens.
- **Process:** 4 itens.

### Recomendação prática

Para a landing, o conjunto de menor risco é:

1. `hero203` ou um hero próprio inspirado nele;
2. `process2` para a narrativa;
3. `gallery41` ou `gallery43`;
4. `testimonial10` ou `testimonial18`;
5. `contact7`;
6. `cta10` ou `cta26`.

Evitaria importar o bloco inteiro sem revisão. Use-o como base estrutural e reconstrua a camada visual com a identidade da confeitaria.

---

## 2. shadcn/ui Directory — prioridade de infraestrutura

**URL principal:** https://ui.shadcn.com/docs/directory  
**Índice de registries:** https://ui.shadcn.com/docs/registry/registry-index  
**API:** https://ui.shadcn.com/docs/registry/api-reference  
**Schemas:**

- https://ui.shadcn.com/docs/registry/registry-json
- https://ui.shadcn.com/docs/registry/registry-item-json

### O que oferece

O Directory é o mecanismo oficial para descobrir registries ao executar:

- `shadcn search`
- `shadcn add`

Segundo a documentação oficial, o CLI consulta o índice e pode adicionar automaticamente o registry ao `components.json`.

### Componentes oficiais úteis como base

| Componente | URL | Uso na landing | Adaptação | Risco |
|---|---|---|---|---|
| **Button** | https://ui.shadcn.com/docs/components/base/button | CTAs `wa.me` e `tel:` | Variantes sólidas/outline na paleta da marca; alvos ≥44px | Baixo |
| **Carousel** | https://ui.shadcn.com/docs/components/base/carousel | Galeria ou avaliações | Remover aparência de produto SaaS; controles editoriais | Médio: teclado, touch e autoplay |
| **Card** | https://ui.shadcn.com/docs/components/base/card | Avaliações e dados de visita | Bordas retas, sem “card soup” | Baixo |
| **Dialog** | https://ui.shadcn.com/docs/components/base/dialog | Lightbox de fotos | Fundo cacau e foco claro | Médio: foco e scroll lock |
| **Aspect Ratio** | https://ui.shadcn.com/docs/components/base/aspect-ratio | Consistência da galeria | Proporções editoriais 4:5/3:2 | Baixo |
| **Separator** | https://ui.shadcn.com/docs/components/base/separator | Divisão de capítulos | Filetes tipo rótulo impresso | Baixo |
| **Scroll Area** | https://ui.shadcn.com/docs/components/base/scroll-area | Faixa horizontal de fotos | Preferir scroll nativo quando possível | Médio em touch/acessibilidade |
| **Typography** | https://ui.shadcn.com/docs/components/base/typography | Narrativa editorial | Substituir defaults por display condensada + corpo legível | Baixo |
| **Accordion** | https://ui.shadcn.com/docs/components/base/accordion | Informações de encomenda/visita | Uso pontual; não esconder conteúdo essencial | Baixo-médio |

### Regras de registry verificadas

A documentação oficial exige que um registry:

- seja JSON válido conforme o schema;
- seja plano, sem itens aninhados;
- exponha `/registry.json` e `/<component-name>.json` na raiz;
- não inclua `content` no array `files` do índice.

### Riscos

- O próprio Directory alerta para **revisar o código na instalação** quanto a segurança e qualidade.
- É uma plataforma de distribuição, não uma curadoria estética.
- Dependências variam por item (`registryDependencies` e `dependencies` devem ser inspecionadas no JSON).
- Um componente compatível com shadcn não é automaticamente acessível, leve ou coerente com a identidade.

---

## 3. Origin UI → COSS UI — uso auxiliar

**URL histórica:** https://originui.com/  
**Redirecionamento atual:** https://coss.com/ui  
**Documentação:** https://coss.com/ui/docs  
**Partículas:** https://coss.com/ui/particles  
**Código:** https://github.com/cosscom/coss

A URL Origin UI redirecionou para **COSS UI**. A página oficial apresenta **508 “particles”** e declara filosofia de código próprio/copy-paste em vez de pacote fechado.

### Componentes relevantes

| Componente | URL | Uso | Adaptação estética | Risco |
|---|---|---|---|---|
| **Button** | https://coss.com/ui/docs/components/button | WhatsApp/telefone | Tokens da marca e ícones discretos | Baixo |
| **Card** | https://coss.com/ui/docs/components/card | Avaliações ou informações da loja | Remover arredondamento e superfície “app” | Baixo |
| **Frame** | https://coss.com/ui/docs/components/frame | Moldura editorial para fotografias | Bom para criar aparência de etiqueta/impressão | Baixo |
| **Scroll Area** | https://coss.com/ui/docs/components/scroll-area | Faixa de galeria | Usar apenas se scroll nativo não bastar | Médio |
| **Tabs** | https://coss.com/ui/docs/components/tabs | Categorias da galeria | Estilo de fichário/rótulo | Médio em mobile |
| **Dialog** | https://coss.com/ui/docs/components/dialog | Lightbox | Ajustar overlay, foco e proporções | Médio |
| **Avatar** | https://coss.com/ui/docs/components/avatar | Autoria de avaliações | Só usar fotos reais e autorizadas | Baixo |
| **Separator** | https://coss.com/ui/docs/components/separator | Ritmo editorial | Filetes e capítulos | Baixo |
| **Toast** | https://coss.com/ui/docs/components/toast | Feedback de copiar telefone | Desnecessário para links diretos | Baixo, mas pouco valor |
| **Drawer / Sheet** | https://coss.com/ui/docs/components/drawer | Navegação móvel | Só se a navegação justificar | Médio; pode adicionar complexidade |

### Avaliação

- **Ponto forte:** primitives atuais, código aberto e ownership do código.
- **Ponto fraco:** na raspagem oficial não apareceram categorias equivalentes a hero, testimonial, gallery ou contact blocks.
- **Melhor uso:** aproveitar uma ou duas primitives, especialmente **Frame**, Button ou Dialog; não adotá-lo como sistema central da landing.
- **Risco de migração:** referências antigas a `originui.com` agora levam a outro nome/domínio. Pins, links e snippets antigos devem ser revalidados.

---

## Adaptação estética transversal

Para evitar que os blocos pareçam templates SaaS:

- trocar radius, sombras e gradientes por **papel creme, cacau, terracota, filetes e bordas retas**;
- usar fotografia quente e real como elemento principal;
- aplicar display condensada em títulos e uma fonte confortável no texto narrativo;
- converter cards em **fichas de fornada, etiquetas ou recortes editoriais**;
- manter WhatsApp e telefone como links nativos (`wa.me`, `tel:`), sem modal intermediário;
- implementar motion como um único gesto narrativo, com `prefers-reduced-motion`;
- não inventar reviews, nota média, endereço, horários ou informações comerciais.

## Arquivos produzidos

Materiais de pesquisa salvos em:

- `/opt/data/cache/tier2-research/`
- snapshots HTML das fontes oficiais;
- `links-all.txt` — links extraídos;
- `blocks.tsv` — IDs, títulos e nível de acesso dos blocos;
- scripts `extract.py` e `extract_blocks.py`.

## Limitações encontradas

- O navegador visual não iniciou, então a investigação foi feita por download e parsing direto das páginas oficiais.
- Vários blocos do Shadcnblocks são **Pro**; o catálogo revela nome e acesso, mas o código completo pode exigir assinatura.
- Dependências exatas variam por bloco e devem ser confirmadas no JSON retornado pelo registry antes da instalação.