const template = document.createElement('template');
template.innerHTML = `
<div
id="mobile-header"
class="fixed z-20 top-0 left-0 h-screen w-screen backdrop-filter backdrop-brightness-[.1] hidden items-center justify-center lg:hidden"
>
<button id="close-mobile-menu" class="absolute top-3 right-3">
 <span class="icon-close text-white">&times;</span>
</button>
<div class="flex gap-10 flex-col text-center">
 <a class="font-sen text-2xl text-white leading-4" id="nav-link" href="#">Home</a>
 <a class="font-sen text-2xl text-white leading-4" id="nav-link" href="#experience"
  >Experience</a
 >
 <a class="font-sen text-2xl text-white leading-4" id="nav-link" href="#my-workflow"
  >Workflow</a
 >
 <a class="font-sen text-2xl text-white leading-4" id="nav-link" href="#my-projects">Work</a>
 <a class="font-sen text-2xl text-white leading-4" id="nav-link" href="#">Resume</a>
</div>
</div>
`;

class MobileMenu extends HTMLElement {
 constructor() {
  super();
  this.appendChild(template.content.cloneNode(true));
  this.mobileMenu = document.querySelector('#mobile-header');
 }

 static get observedAttributes() {
  return ['isopen'];
 }

 attributeChangedCallback(name, oldValue, newValue) {
  if (newValue === oldValue) return;
  if (oldValue !== null) {
   this.handleMenuToggle(newValue);
  }
 }

 get isopen() {
  return this.getAttribute('isopen');
 }

 set isopen(newValue) {
  this.setAttribute('isopen', newValue);
 }

 connectedCallback() {
  this.addCloseListener();
  this.addNavListener();
  if (!this.isopen) {
   this.setAttribute('isopen', false);
  }
 }

 addCloseListener() {
  this.querySelector('#close-mobile-menu').addEventListener('click', () => {
   this.setAttribute('isopen', false);
  });
 }

 addNavListener() {
  this.mobileMenu.addEventListener('click', (e) => {
   if (e.target.id === 'nav-link') {
    this.setAttribute('isopen', false);
   }
  });
 }

 handleMenuToggle(value) {
  if (value === 'false') {
   this.mobileMenu.classList.add('hidden');
   this.mobileMenu.classList.remove('flex');
  } else if (!this.mobileMenu.classList.contains('flex')) {
   this.mobileMenu.classList.add('flex');
   this.mobileMenu.classList.remove('hidden');
  }
 }
}

export default MobileMenu;
