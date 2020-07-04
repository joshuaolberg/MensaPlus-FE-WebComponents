export default class HomeModule extends HTMLElement {
    connectedCallback() {
        this.innerText = 'Hello HomeModule'
    }
}

if (!customElements.get('mp-home-module')) {
    customElements.define('mp-home-module', HomeModule);
}
