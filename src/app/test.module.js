import Template from './test.module.template.js'

class AppModule extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
    }
}

customElements.define('mp-app-root', AppModule)
