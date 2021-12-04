import './css/index.css';
import { registerComponents } from './js/config/components';
import WorkExperience from './js/components/WorkExperience';
import Skills from './js/components/Skills';

registerComponents();
const experience = new WorkExperience();
experience.generateExperience();
const skills = new Skills();
