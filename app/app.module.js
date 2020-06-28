import EssenModule from './modules/essen/essen.module.js'

export default class App extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<mp-essen-module></mp-essen-module>'
    }
}

if (!customElements.get('mp-app-root')) {
    customElements.define('mp-app-root', App);
}
