import { skills } from '../config/data';

class Skills {
 constructor() {
  this.allSkills = skills;
  this.container = document.querySelector('.skills');
  this.render();
 }

 generateSkill({ title, description, icon }) {
  return `<project-skill>
    <span class="${icon}" slot="icon"></span>
    <span
    class="text-white font-sen font-bold text-2xl leading-[29px]"
    slot="title"
    >
        ${title}
    </span>
    <span
    class="text-light-text font-sen text-base leading-[150%]"
    slot="description"
    >
        ${description}
    </span>
</project-skill>
 `;
 }

 render() {
  const fragment = document.createDocumentFragment();
  this.allSkills.forEach(({ title, description, icon }) => {
   const div = document.createElement('div');
   div.innerHTML = this.generateSkill({ title, description, icon });
   while (div.firstChild) {
    fragment.appendChild(div.firstChild);
   }
  });
  this.container.append(fragment);
 }
}

export default Skills;
