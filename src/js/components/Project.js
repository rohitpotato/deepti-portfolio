const IMAGE_HIGH = 'imagehigh';
const IMAGE_MEDIUM = 'imagemedium';
const IMAGE_LOW = 'imagelow';
const DECSRIPTION = 'description';
const TITLE = 'title';
const URL = 'url';
const TYPE = 'type';

const template = document.createElement('template');
const textTemplate = document.createElement('template');
template.innerHTML = `
<div class="grid-item" id="project-">
    <div class="card-bg relative w-full md:h-[38rem] h-[19rem]">
    <div class="">
        <picture>
            <source id="src1" media="(min-width: 960px)">
            <source id="src2" media="(min-width: 320px)">       
            <img
                id="image"
                alt="project-img"
                loading="lazy"
                class=" max-w-full max-h-full m-0 p-0 object-contain absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            />
        </picture>
    </div>
</div>
<div class="lg:p-8 p-6 bg-primary-color-dark flex flex-col gap-4">
    <div id="title" class="font-sen font-bold text-white text-base leading-[29px]">
    </div>
    <div id="description" class="text-base font-sen text-dark-text leading-6">$</div>
    <a id="url" href="" class="font-sen text-white hover:underline"
    >View Case Study</a>
</div>
</div>
`;

textTemplate.innerHTML = `<div class="lg:text-[54px] text-3xl text-white font-sen font-bold lg:leading-[66px] grid-item full" id="title"></div>`;

const generateTemplate = ({
 url,
 imageHigh,
 imageMedium,
 imageLow,
 description,
 title,
}) => {
 const clone = document.importNode(template.content, true);
 const pElement = clone.querySelector(`picture`);
 pElement.querySelector('#src1').srcset = imageHigh;
 pElement.querySelector('#src2').srcset = imageMedium;
 pElement.querySelector('img').src = imageHigh;
 clone.querySelector(`#${TITLE}`).textContent = title;
 clone.querySelector(`#${DECSRIPTION}`).textContent = description;
 clone.querySelector(`#${URL}`).href = url;
 return clone;
};

const generateTextTemplate = (title) => {
 const clone = document.importNode(textTemplate.content, true);
 clone.querySelector(`#${TITLE}`).textContent = title;
 return clone;
};
class ProjectCard extends HTMLElement {
 static get observedAttributes() {
  return [IMAGE_LOW, IMAGE_MEDIUM, IMAGE_HIGH, DECSRIPTION, TITLE, URL, TYPE];
 }

 connectedCallback() {
  //   this.id = 'grid-item';
  this.render();
  if (!this.url) {
   this.setAttribute(URL, '#');
  }
 }

 attributeChangedCallback(name, oldValue, newValue) {
  if (oldValue === newValue) return;
  this.render();
 }

 get imagehigh() {
  return this.getAttribute(IMAGE_HIGH);
 }

 set imagehigh(newValue) {
  this.setAttribute(IMAGE_HIGH, newValue);
 }

 get imagemedium() {
  return this.getAttribute(IMAGE_MEDIUM);
 }

 set imagemedium(newValue) {
  this.setAttribute(IMAGE_MEDIUM, newValue);
 }

 get imagelow() {
  return this.getAttribute(IMAGE_LOW);
 }

 set imagelow(newValue) {
  this.setAttribute(IMAGE_LOW, newValue);
 }

 get title() {
  return this.getAttribute(TITLE);
 }

 set title(newValue) {
  this.setAttribute(TITLE, newValue);
 }

 get description() {
  return this.getAttribute(DECSRIPTION);
 }

 set description(newValue) {
  this.setAttribute(DECSRIPTION, newValue);
 }

 get url() {
  return this.getAttribute(URL);
 }

 set url(newValue) {
  this.setAttribute(URL, newValue);
 }

 get type() {
  return this.getAttribute(TYPE);
 }

 set type(newValue) {
  this.setAttribute(TYPE, newValue);
 }

 render() {
  const generatedTemplate =
   this.type === 'text'
    ? generateTextTemplate(this.title)
    : generateTemplate({
       imageHigh: this.imagehigh,
       imageMedium: this.imagemedium,
       url: this.url,
       description: this.description,
       title: this.title,
      });
  this.innerHTML = '';
  this.appendChild(generatedTemplate);
 }
}

export default ProjectCard;
