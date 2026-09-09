# DESIGN — Confeitaria Paganelli

## Direção
- Artefato: site institucional e de conversão local.
- Conceito: **A cidade pela vitrine**.
- Público: moradores de São José do Rio Preto, famílias e clientes de encomendas.
- Ação primária: abrir rota, ligar ou consultar a vitrine pelo WhatsApp.
- Adjetivos: gráfica, direta, generosa, urbana, afetiva.
- Essência: **escolha com os olhos**.

## Sistema visual
- Display: Archivo 800–900, geométrica e arquitetônica.
- Corpo: Manrope 400–700.
- Logo: exclusivamente o SVG oficial; a animação revisada enviada pelo usuário aparece no bloco histórico.
- Paleta: porcelana `#F5F2F3`, ameixa `#24141F`, rosa `#E95687`, rosa claro `#F5B7CA`, azul-fachada `#08A9D4`.
- Geometria: cantos retos, linhas e divisões inspiradas nos caixilhos azuis da fachada.
- Signature move: **moldura de vitrine** — uma grade azul que enquadra imagens e conduz a aproximação do visitante.
- Sem textura global, serifas nostálgicas, capítulos numerados, selos ou cards genéricos.

## Composição
- Hero: macro do folhado em tela inteira, headline condensada e janela sobreposta com a fachada real.
- Vitrine: duas fotografias assimétricas, legenda editorial e CTA para consultar a seleção do dia.
- Aproximação: única cena sticky no desktop; moldura azul revela a vitrine em três detalhes.
- Espaço: mosaico desigual no desktop; trilho touch com próxima imagem visível e indicador sincronizado no mobile.
- História: `1947` monumental, texto factual curto e animação SVG revisada fornecida pelo usuário.
- Visita: fachada e painel de endereço/ações em contraste alto.
- Mobile: header fixo sólido, menu de tela inteira, controles de 44px+, fluxo vertical e CTA persistente compacto.

## Motion
- Chegada imediata, sem tela de espera.
- Hero resolve em 450–900ms: fotografia, linhas, headline e janela.
- Reveals por `IntersectionObserver`; imagens falham abertas e nunca dependem do observer para existir.
- Uma única seção sticky; nada de listener global recalculando imagens.
- Reduced motion entrega o estado final completo.

## Conteúdo e origem
- Fatos utilizados: nome, endereço Rua Ondina 334, telefone (17) 3231-4174, Instagram, São José do Rio Preto e “desde 1947”.
- Não há preços, cardápio permanente, horários ou promessas de serviço sem fonte.
- Fotos reais são identificadas como registro real; imagens editoriais como direção de arte inspirada no espaço.

## Slop audit
- Sem gradientes decorativos, glassmorphism, emoji, texto em gradiente ou hero SaaS.
- A identidade depende da combinação incomum entre rosa, azul, fachada, logo oficial e textura dos produtos.
- Layouts variam por função; não há sequência de três cards iguais.
- Motion comunica aproximação e abertura da vitrine, não decoração aleatória.
