import Template from './app.component.template.js'

class AppComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
    }
}

if (!customElements.get('mp-app-root')) {
    customElements.define('mp-app-root', AppComponent)
}
