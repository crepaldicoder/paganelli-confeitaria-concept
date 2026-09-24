// Faixa em loop continuo: duas metades identicas (4 grupos cada, mais larga que qualquer
// tela) e a animacao anda exatamente meia faixa. Antes andava 35% com o texto repetido em
// outro ponto, entao pulava a cada volta e deixava o terco direito vazio. So o 1o grupo e
// lido por leitor de tela.
const ribbonWords=['massa folhada','receitas de família','produção artesanal','memória afetiva'];
export const ribbonItems=Array.from({length:8},(_,k)=>ribbonWords.map(w=>`<span${k?' aria-hidden="true"':''}>${w}</span><i aria-hidden="true"></i>`).join('')).join('');
