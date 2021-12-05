import { projects } from '../config/data';

class Projects {
 constructor() {
  this.container = document.querySelector('.c-grid');
  this.personalProjectContainer = document.querySelector('#my-projects');
  this.projects = projects;
  this.render();
 }

 attachProjects() {
  const fragment = document.createDocumentFragment();
  this.projects
   .filter(({ type }) => type !== 'personal')
   .forEach(({ title, images, description, url, type }) => {
    const div = document.createElement('div');
    div.innerHTML = `<project-card imagehigh="${(images && images.high) || ''}"
    } title='${title}' description="${description}" url="${url}" type="${type}"></project-card>`;
    while (div.firstChild) {
     fragment.appendChild(div.firstChild);
    }
   });
  this.container.appendChild(fragment);
 }

 attachPersonalProjects() {
  const fragment = document.createDocumentFragment();
  this.projects
   .filter(({ type }) => type === 'personal')
   .forEach(({ title, images, description, url, type }) => {
    const div = document.createElement('div');
    div.innerHTML = `<project-card imagehigh='${images.high}' title='${title}' description="${description}" url="${url}" type="${type}"></project-card>`;
    while (div.firstChild) {
     fragment.appendChild(div.firstChild);
    }
   });
  this.personalProjectContainer.appendChild(fragment);
 }

 render() {
  this.attachProjects();
  this.attachPersonalProjects();
 }
}
export default Projects;
