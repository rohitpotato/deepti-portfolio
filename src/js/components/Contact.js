const template = document.createElement('template');
template.innerHTML = `
<footer
class="lg:mt-64 md:mt-24 mt-[72px] lg:px-[72px] md:px-10 px-5 w-full gap-12 flex flex-col items-center justify-center text-center"
id="contact-me"
>
<div id="contact-heading">
 <div
  class="lg:text-[54px] text-3xl text-white font-sen font-bold leading-[66px]"
 >
  Contact Me
 </div>
 <div id="contact-description" class="font-sen text-light-text">
  Now that you know a lot about me, let me know if you are interested to
  hire me.
 </div>
</div>
<div
 id="contacts-block"
 class="py-10 px-6 card-bg space-y-6 lg:w-[50%] md:w-[60%] w-full md:text-center text-center"
>
 <div class="flex items-center gap-4">
 <img height=28 width=28 src="/assets/icons/phone.svg" />
  <a
   href="tel:+91 9648230338"
   class="text-light-text font-sen text-sm leading-4 hover:underline"
   >+91 9648230338</a
  >
 </div>
 <div class="flex items-center gap-4">
 <img height=28 width=28 src="/assets/icons/mail.svg" />
  <a
   href="mailto:deepti.mmm98@gmail.com"
   target="blank"
   class="text-light-text font-sen text-sm leading-4 hover:underline break-all"
   >deepti.mmm98@gmail.com</a
  >
 </div>
 <div class="flex items-center gap-4">
 <img height=28 width=28 src="/assets/icons/linkedin.svg" />
  <a
   target="blank"
   href="https://linkedin.com/in/theinfamoustomato218/"
   class="text-light-text font-sen text-sm leading-4 hover:underline break-all"
   >linkedin.com/in/theinfamoustomato218/</a
  >
 </div>
 <div class="flex items-center gap-4">
 <img height=28 width=28 src="/assets/icons/behance.svg" />
  <a
   target="blank"
   href="https://behance.net/deeptiverma"
   class="text-light-text font-sen text-sm leading-4 hover:underline break-all"
   >behance.net/deeptiverma</a
  >
 </div>
 <div class="flex items-center gap-4">
 <img height=28 width=28 src="/assets/icons/dribbble.svg" />
  <a
   target="blank"
   href="https://dribbble.com/theinfamoustomato218"
   class="text-light-text font-sen text-sm leading-4 hover:underline break-all"
   >dribbble.com/theinfamoustomato218</a
  >
 </div>
</div>
</footer>
`;

class Contact extends HTMLElement {
 constructor() {
  super();
  this.render();
 }

 render() {
  this.appendChild(template.content.cloneNode(true));
 }
}

export default Contact;
