import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
// Um arquivo por componente, na ordem da cascata (generico -> especifico, depois as
// secoes na ordem da pagina). A ordem dos imports importa: nao reordene.
import './styles/00-base.css';
import './styles/01-motion.css';
import './styles/02-components.css';
import './styles/03-layout.css';
import './styles/04-intro.css';
import './styles/05-topbar.css';
import './styles/06-menu.css';
import './styles/07-hero.css';
import './styles/08-ribbon.css';
import './styles/09-manifesto.css';
import './styles/10-quote.css';
import './styles/11-atmosphere.css';
import './styles/12-table.css';
import './styles/13-heritage.css';
import './styles/14-reviews.css';
import './styles/15-guide.css';
import './styles/16-visit.css';
import './styles/17-footer.css';
import './styles/18-whatsapp.css';

import { renderPage } from './page/render.js';
import { initScribeTitles } from './features/scribe.js';
import { initMenu } from './features/menu.js';
import { initHeroVideo } from './features/hero-video.js';
import { initMotion } from './features/motion.js';
import { initPointerEffects } from './features/pointer.js';
import { initRibbon } from './features/ribbon.js';
import { initReviewIndexes, initRails } from './features/rails.js';
import { initDiagnostics } from './features/diagnostics.js';

// A ordem de inicializacao e a mesma de quando tudo morava neste arquivo.
renderPage(document.querySelector('#app'));
initScribeTitles();

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
// Lenis suaviza a entrada da roda/trackpad: sem ele cada "tick" da roda pula ~100px
// de uma vez e o scrub do video salta junto. Com ele o scroll anda um pouco a cada
// frame e o video acompanha continuo. No toque fica o scroll nativo (syncTouch off):
// a inercia do iOS ja e suave e emula-la em JS piora a sensacao.
const lenis=reduced?null:new Lenis({autoRaf:true,lerp:.09,anchors:true,stopInertiaOnNavigate:true});

const menu=initMenu(lenis);
const hero=initHeroVideo(reduced);
initMotion({reduced,lenis,menu,hero});
initPointerEffects(reduced);
initReviewIndexes();
initRibbon(reduced);
initRails(reduced);
initDiagnostics();
