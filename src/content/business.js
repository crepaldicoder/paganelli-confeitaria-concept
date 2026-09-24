// Dados da confeitaria num lugar so: usados no HTML, no link do WhatsApp e nos dados
// estruturados para o Google. Mudou telefone/endereco? Muda aqui.
export const phone='tel:+551732314174';
export const maps='https://www.google.com/maps/place/Confeitaria+Paganelli/@-20.8203768,-49.3894545,17z/data=!4m6!3m5!1s0x94bdadbadbd0a8eb:0x25475b3bbd009d45!8m2!3d-20.8203768!4d-49.3894545!16s%2Fg%2F11q40g7yw_';
export const instagram='https://www.instagram.com/confeitariapaganelli/';
export const whatsapp='https://wa.me/551732314174?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Paganelli.';

// Texto que aparece no site e dados para o Google (JSON-LD)
export const name='Confeitaria Paganelli';
export const phoneDisplay='(17) 3231-4174';
export const phoneE164='+551732314174';
export const street='Rua Ondina, 334';
export const district='Vila Redentora';
export const city='São José do Rio Preto';
export const region='SP';
export const postalCode='15015-205';
export const geo={lat:-20.8203768,lng:-49.3894545};

// WhatsApp de encomenda: abre a conversa com o roteiro do pedido ja escrito.
export const whatsappOrder='https://wa.me/551732314174?text='+encodeURIComponent('Olá! Quero fazer uma encomenda na Paganelli.\n\nO que eu gostaria:\nQuantidade ou tamanho:\nPara que dia e horário:');

// O que tem na vitrine (fontes: site antigo da Paganelli e diretórios locais).
export const categories=['Bolos','Tortas e folhados','Salgados','Doces e sobremesas','Pães especiais','Sonhos','Bolos diet'];

// Horário de funcionamento. Ainda NÃO confirmado com a Paganelli, então fica null e nada
// aparece no site. Formato: [[dias (0=dom … 6=sáb), abre, fecha], ...]
// Ex.: [[[1,2,3,4,5],'08:00','19:00'],[[6],'08:00','14:00']]
export const hours=null;
