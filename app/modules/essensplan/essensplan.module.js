export default class EssensplanModule extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<mp-essensplan-list api="http://localhost:8080/essensplan"></mp-essensplan-list>'
    }
}

if (!customElements.get('mp-essensplan-module')) {
    customElements.define('mp-essensplan-module', EssensplanModule);
}
