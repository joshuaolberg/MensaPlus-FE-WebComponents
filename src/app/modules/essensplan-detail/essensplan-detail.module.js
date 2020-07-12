export default class EssensplanDetailModule extends HTMLElement {

    connectedCallback() {
        this.innerHTML = '<p>Hallo</p>'
    }
}

if (!customElements.get('mp-essensplan-detail-module')) {
    customElements.define('mp-essensplan-detail-module', EssensplanDetailModule);
}
