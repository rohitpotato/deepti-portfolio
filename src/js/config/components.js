import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/Project';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import MobileMenu from '../components/MobileMenu';

const components = [
 {
  name: 'custom-header',
  component: Header,
 },
 {
  name: 'hero-section',
  component: HeroSection,
 },
 {
  name: 'my-skill',
  component: Skill,
 },
 {
  name: 'project-card',
  component: ProjectCard,
 },
 {
  name: 'contact-me',
  component: Contact,
 },
 {
  name: 'mobile-menu',
  component: MobileMenu,
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
