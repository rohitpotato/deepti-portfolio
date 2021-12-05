import './css/index.css';
import { registerComponents } from './js/config/components';
import WorkExperience from './js/components/WorkExperience';
import Skills from './js/components/Skills';
import Projects from './js/components/Projects';
import Colcade from './js/lib/colcade';

registerComponents();
const experience = new WorkExperience();
experience.generateExperience();
const skills = new Skills();
const projects = new Projects();
// colcade doesn't work with web components
// web component attribute observers will not work if using with colcade

const colcade = new Colcade('.c-grid', {
 columns: '.grid-col',
 items: '.grid-item',
});
