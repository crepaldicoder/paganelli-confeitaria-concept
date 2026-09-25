// Medidor para o aparelho real, ligado so com ?diag na URL (sem custo para o visitante).
// Separa o hero em "comeco" (texto na tela) e "fim", porque o engasgo do iPhone aparece
// so no comeco. Chaves para isolar a causa no proprio aparelho:
//   ?diag=1&semsombra  tira as sombras do texto do hero
//   ?diag=1&semtexto   esconde o texto do hero
//   ?diag=1&semveu     esconde o veu escuro por cima da imagem
//   ?diag=1&semsuave   volta ao hero pulando direto para cada posicao do scroll
export const DIAG=/[?&]diag/.test(location.search);
const phases={comeco:{n:0,sum:0,worst:0,slow:0},fim:{n:0,sum:0,worst:0,slow:0}};
const js={n:0,sum:0,max:0},draw={n:0,sum:0,max:0},input={n:0,sum:0,max:0};
let lastInput=0;
let heroP=0,scrollEvents=0;
const add=(acc,v)=>{acc.n++;acc.sum+=v;if(v>acc.max)acc.max=v};
export const probe={
 js:ms=>{add(js,ms);scrollEvents++},
 draw:ms=>add(draw,ms),
 // intervalo entre posicoes novas de scroll entregues a pagina (so dentro de um mesmo gesto)
 input:()=>{const now=performance.now(),dt=now-lastInput;lastInput=now;if(dt<400)add(input,dt)},
 hero:p=>{heroP=p},
 reset(){for(const a of [...Object.values(phases),js,draw,input]){a.n=0;a.sum=0;a.max=0;a.worst=0;a.slow=0}},
 lines(){
  const ph=k=>{const a=phases[k];return a.n?`${k.padEnd(7)}${Math.round(1000/(a.sum/a.n))} fps  pior ${Math.round(a.worst)}ms  lentos ${a.slow}/${a.n}`:`${k.padEnd(7)}-`};
  const avg=a=>a.n?(a.sum/a.n).toFixed(1)+'ms (max '+a.max.toFixed(0)+')':'-';
  return [ph('comeco'),ph('fim'),'scroll a cada '+avg(input),'js/scroll '+avg(js),'desenho   '+avg(draw),'hero p    '+heroP.toFixed(2)];
 }
};
if(DIAG){
 const q=location.search;
 if(q.includes('semsombra'))document.documentElement.classList.add('diag-semsombra');
 if(q.includes('semtexto'))document.documentElement.classList.add('diag-semtexto');
 if(q.includes('semveu'))document.documentElement.classList.add('diag-semveu');
 if(q.includes('semsuave'))document.documentElement.classList.add('diag-semsuave');
 // intervalo entre quadros so enquanto o hero se move (parado nao conta)
 let last=0,lastP=-1;
 const tick=now=>{
  if(last&&heroP!==lastP&&heroP>0&&heroP<1){
   const dt=now-last,a=phases[heroP<.42?'comeco':'fim'];
   a.n++;a.sum+=dt;if(dt>a.worst)a.worst=dt;if(dt>34)a.slow++;
  }
  last=now;lastP=heroP;requestAnimationFrame(tick);
 };
 requestAnimationFrame(tick);
}
