const template = document.createElement('template');
template.innerHTML = `
    <style>
        ::host {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        #card-container {
            position: absolute
        }

        img {
            poistion: absolute;
            top: 0;
            left: 0;
            transform: translate(-50%, -50%);
        }
    </style>
    <div id="card-container">
        <img src="" alt="project-image" />
    </div>
    <div id="card-info">
        <slot name="project-name"></slot>
        <slot name="project-description"></slot>
        <a id="case-study-link">
            <slot name="case-study-url"></slot>
        </a>
    </div>
`;

class ProjectCard extends HTMLElement {
 constructor() {
  super();
  const shadow = this.attachShadow({ mode: 'open' });
 }

 render() {}
}

export default ProjectCard;
