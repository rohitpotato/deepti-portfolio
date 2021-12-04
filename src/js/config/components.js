import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Skill from '../components/Skill';

const components = [
 {
  name: 'project-header',
  component: Header,
 },
 {
  name: 'project-hero',
  component: HeroSection,
 },
 {
  name: 'project-skill',
  component: Skill,
 },
];

export const registerComponents = () =>
 new Promise((resolve, reject) => {
  components.forEach(({ component, name, registerAs }) => {
   try {
    if (registerAs) {
     customElements.define(name, component, { extends: registerAs });
    } else {
     customElements.define(name, component);
    }
   } catch (e) {
    reject({ message: 'Failed to register component', component, reason: e });
    console.log('Web Components are not supported by your browser!');
   }
  });
  resolve('ALL COMPONENTS REGISTERED SUCCESSFULLY');
 });

export default components;
