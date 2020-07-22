import Template from './essensplan.module.template.js'

export default class EssensplanModule extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
    }
}

if (!customElements.get('mp-essensplan-module')) {
    customElements.define('mp-essensplan-module', EssensplanModule);
}
