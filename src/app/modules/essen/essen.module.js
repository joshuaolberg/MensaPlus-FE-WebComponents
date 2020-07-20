import Template from './essen.module.template.js';

export default class EssenModule extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
    }
}

if (!customElements.get('mp-essen-module')) {
    customElements.define('mp-essen-module', EssenModule);
}
