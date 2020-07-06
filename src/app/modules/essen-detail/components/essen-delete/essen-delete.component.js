export default class EssenDeleteComponent extends HTMLElement {

    connectedCallback() {
        this.innerText = 'Hi'
    }

}

if (!customElements.get('mp-essen-delete')) {
    customElements.define('mp-essen-delete', EssenDeleteComponent);
}
