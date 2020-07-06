import './components/essen-detail/essen-detail.component.js';
import './components/essen-delete/essen-delete.component.js';

export default class EssenDetailModule extends HTMLElement {

    connectedCallback() {
        this.innerHTML = '<mp-essen-detail api="http://localhost:8080/essen/"></mp-essen-detail>' +
            '<mp-essen-delete></mp-essen-delete>'
    }
}

if (!customElements.get('mp-essen-detail-module')) {
    customElements.define('mp-essen-detail-module', EssenDetailModule);
}
