import { totalWorkExperience } from '../config/data';

const containerTemplate = document.createElement('template');
containerTemplate.innerHTML = `
    <div id="experience-container">
        <div class="text-grey-1 text-[117px] font-bold font-sen" id="index"></div>
        <div id="experience-summary" class="flex flex-col gap-8"></div>
    </div>
`;

const experienceTemplate = document.createElement('template');
experienceTemplate.innerHTML = `
<div class="flex gap-2 flex-wrap" id="experience">
            <div class="text-2xl font-sen font-bold text-green-1" id="company"></div>
            <div class="text-2xl font-sen font-bold text-white" id="duration"></div>
            <div class="text-2xl font-sen font-bold text-green-2 text-opacity-60" id="position"></div>
        </div>`;

class WorkExperience {
 constructor() {
  this.experiences = totalWorkExperience || [];
  this.experiencesContainer = document.querySelector('#experiences');
 }

 generateExperience() {
  const fragment = document.createDocumentFragment();
  this.experiences.forEach((experience, index) => {
   const expContainerTemplate = document.importNode(
    containerTemplate.content,
    true,
   );
   const indexEl = expContainerTemplate.getElementById('index');
   indexEl.innerText = index + 1 < 10 ? `0${index + 1}` : index + 1;
   const experienceContainer = expContainerTemplate.querySelector(
    '#experience-container',
   );
   const expSummary = expContainerTemplate.querySelector('#experience-summary');
   experience.forEach(({ company, duration, position }) => {
    const expTemplate = document.importNode(experienceTemplate.content, true);
    expTemplate.getElementById('company').innerText = company;
    expTemplate.getElementById('duration').innerText = duration;
    expTemplate.getElementById('position').innerText = position;
    expSummary.appendChild(expTemplate);

    experienceContainer.appendChild(expTemplate);
   });
   fragment.appendChild(experienceContainer);
  });
  this.experiencesContainer.appendChild(fragment);
 }
}

export default WorkExperience;
