import './components/essensplan-list/essensplan-list.component.js'
import './components/essensplan-add/essensplan-add.component.js'

export default class EssensplanModule extends HTMLElement {

    connectedCallback() {
        this.innerHTML = '<mp-essensplan-list api="http://localhost:8080/essensplan"></mp-essensplan-list>' +
            '<mp-essensplan-add api="http://localhost:8080/essensplan"></mp-essensplan-add>'
    }
}

if (!customElements.get('mp-essensplan-module')) {
    customElements.define('mp-essensplan-module', EssensplanModule);
}
