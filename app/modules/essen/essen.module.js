import EssenListComponent from './components/essen-list/essen-list.component.js'

export default class EssenModule extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<mp-essen-list api="http://localhost:8080/essen"></mp-essen-list>'
    }
}

if (!customElements.get('mp-essen-module')) {
    customElements.define('mp-essen-module', EssenModule);
}
