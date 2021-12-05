const template = document.createElement('template');
template.id = 'hero';
template.innerHTML = `   
<div class="flex flex-col md:flex-row">
<div class="hero-image md:w-[40%] relative md:block flex justify-center">
 <img
  src="https://deepti-portfolio.s3.ap-south-1.amazonaws.com/images/high/hero.png"
  class="object-contain md:absolute top-1/2 left-[65%] md:-translate-x-2/4 md:-translate-y-2/4 md:scale-125 md:mt-0 -mb-10"
 />
</div>
<div
 class="bg-primary-color-dark flex items-center justify-center md:w-[60%] pt-[120px] py-[72px] pl-[10%] pr-[1%] md:pr-[5%]"
 id="intro-primary-heading"
>
 <div>
  <div>
   <div class="font-sen intro-heading font-bold text-7xl text-white">
    I'm Deepti Verma.
   </div>
   <div class="font-sen intro-heading font-bold text-7xl text-white">
    A UX/UI Designer
   </div>
   <div class="font-sen intro-heading font-bold text-7xl text-dark-text">
    from Bengaluru
   </div>
  </div>
  <div id="about" class="mt-20 space-y-[24px]">
   <div class="text-light-text font-sen text-lg leading-6">
    I’m a self taught UI/UX Designer with 1+ years of experience in
    delivering intuitive and user centric B2B solutions.
   </div>
   <div class="text-light-text font-sen text-lg leading-6">
    I’m Potterhead & love to dance.
   </div>
  </div>
  <div class="mt-[72px]" id="get-in-touch-cta">
   <a
    class="leading-6 bg-primary-purple text-white px-6 py-3 rounded-lg font-bold text-sm md:text-base lg:text-lg"
    >Get in Touch</a
   >
  </div>
 </div>
</div>
</div>
`;

class HeroSection extends HTMLElement {
 connectedCallback() {
  if (this.isConnected) {
   this.render();
  }
 }

 render() {
  this.appendChild(document.importNode(template.content, true));
 }
}

export default HeroSection;
