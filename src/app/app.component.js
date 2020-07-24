import Template from './app.component.template.js'

class AppComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
    }
}

customElements.define('mp-app-root', AppComponent)
