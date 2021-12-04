const template = document.createElement('template');
template.id = 'project-header';
template.innerHTML = `   
<header
 class="w-full bg-primary-color-dark flex items-center gap-8 lg:px-[72px] md:px-10 px-5 sticky top-0 left-0 z-10"
>
 <a>
  <span class="icon-pen" />
 </a>
 <div class="ml-auto gap-8 flex">
  <a
   href="#experience"
   class="font-sen text-light-text py-8 px-6 cursor-pointer lg:flex items-center hidden"
  >
   Experience
  </a>
  <a
   class="font-sen text-light-text py-8 px-6 cursor-pointer lg:flex items-center hidden"
  >
   Workflow
  </a>
  <a
   class="font-sen text-light-text py-8 px-6 cursor-pointer lg:flex items-center hidden"
  >
   Work
  </a>
  <a
   class="font-sen text-light-text py-8 px-6 cursor-pointer hidden sm:flex items-center"
  >
   Contact Me
  </a>
  <a
   class="font-sen text-light-text py-8 px-6 cursor-pointer hidden sm:flex items-center text-center bg-primary-purple"
  >
   Resume
  </a>
  <a class="py-8 px-6 cursor-pointer flex items-center md:hidden">
   <span class="icon-puzzle" />
  </a>
 </div>
</header>
`;

class Header extends HTMLElement {
 connectedCallback() {
  if (this.isConnected) {
   this.render();
  }
 }

 render() {
  this.appendChild(document.importNode(template.content, true));
 }
}

export default Header;
