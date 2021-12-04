const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-direction: column;
        }
        #title {
            margin-top: 1.5rem;
        }
        #description {
            margin-top: 0.1rem;
        }
    </style>
        <div id="icon">
            <slot name="icon"></slot>
        </div>
        <div id="title">
            <slot name="title"></slot>
        </div>
        <div id="description">
            <slot name="description"></slot>
        </div>
`;

class Skill extends HTMLElement {
 constructor() {
  super();
  const shadowRoot = this.attachShadow({ mode: 'open' });
  this.render(shadowRoot);
 }

 render(shadow) {
  shadow.appendChild(template.content.cloneNode(true));
 }
}

export default Skill;
