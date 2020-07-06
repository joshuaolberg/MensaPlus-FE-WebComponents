export default class NotFoundModule extends HTMLElement {

    connectedCallback() {
        this.innerText = 'Not found'
    }
}

customElements.define('mp-not-found-module', NotFoundModule);

