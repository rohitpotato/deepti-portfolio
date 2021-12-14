import routes from '../config/constants';

const template = document.createElement('template');
template.id = 'project-header';
template.innerHTML = `   
<header
 class="w-full bg-primary-color-dark flex items-center gap-8 lg:px-[72px] md:px-10 px-5 sticky top-0 left-0 z-10"
>
 <a id="home" href="#">
  <img height=28 width=28 src="/assets/icons/home.svg" alt='home-icon' />
 </a>
 <div class="ml-auto gap-8 flex items-center">
  <a
  id="experience-link"
   href="#experience"
   class="font-sen text-light-text py-8 px-6 cursor-pointer lg:flex items-center hidden"
  >
   Experience
  </a>
  <a
  id="workflow-link"
   href="#my-workflow"
   class="font-sen text-light-text py-8 px-6 cursor-pointer lg:flex items-center hidden"
  >
   Workflow
  </a>
  <a
  id="projects-link"
   href="#my-projects"
   class="font-sen text-light-text py-8 px-6 cursor-pointer lg:flex items-center hidden"
  >
   Work
  </a>
  <a
  id="contact-link"
   href="#contact-me"
   class="font-sen text-light-text py-8 px-6 cursor-pointer hidden sm:flex items-center"
  >
   Contact Me
  </a>
  <a
   class="font-sen text-light-text py-8 px-6 cursor-pointer hidden sm:flex items-center text-center"
  >
   Resume
  </a>
  <a id="menu-toggle" class="py-8 px-6 cursor-pointer flex items-center md:hidden">
  <img height=28 width=28 src="/assets/icons/menu.svg" />
  </a>
 </div>
</header>
`;

class Header extends HTMLElement {
 constructor() {
  super();
  this.render();
 }

 connectedCallback() {
  this.querySelector('#menu-toggle').addEventListener('click', () => {
   const mobileMenu = document.querySelector('mobile-menu');
   mobileMenu.setAttribute('isopen', true);
  });
  this.addRouteListener();
 }

 render() {
  this.appendChild(document.importNode(template.content, true));
 }

 addRouteListener() {
  window.addEventListener('hashchange', (evt) => {
   const { oldURL } = evt;
   const { newURL } = evt;
   const hashValue = newURL.substr(newURL.indexOf('#') + 1);
   const oldHashValue = oldURL.substr(oldURL.indexOf('#') + 1);
   if (routes[hashValue]) {
    const currentLink = routes[hashValue];
    const oldLink = routes[oldHashValue];
    if (currentLink !== 'home') {
     this.querySelector('header')
      .querySelector(`#${currentLink}`)
      .classList.add('bg-primary-purple');
    }
    if (oldLink) {
     this.querySelector('header')
      .querySelector(`#${oldLink}`)
      .classList.remove('bg-primary-purple');
    }
   }
  });
 }
}

export default Header;
