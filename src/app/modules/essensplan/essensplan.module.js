export default class EssensplanModule extends HTMLElement {
    connectedCallback() {
        this.innerText = 'Hello Essensplan'
    }
}

if (!customElements.get('mp-essensplan-module')) {
    customElements.define('mp-essensplan-module', EssensplanModule);
}
