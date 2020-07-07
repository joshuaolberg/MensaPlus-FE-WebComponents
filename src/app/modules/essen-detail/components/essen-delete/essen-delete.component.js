import Template from './essen-delete.template.js'

export default class EssenDeleteComponent extends HTMLElement {

    get api() {
        return this.getAttribute('api');
    }

    get id() {
        return this.getAttribute('id');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.dom.btnDelete.addEventListener('click', () => this.deleteEssenById(this.id));
    }

    deleteEssenById(id) {
        const request = new XMLHttpRequest();
        request.open('DELETE', this.api + id);
        request.addEventListener('load', (event) => alert('Essen gelöscht'));
        request.send();
        window.history.back();
    }
}

if (!customElements.get('mp-essen-delete')) {
    customElements.define('mp-essen-delete', EssenDeleteComponent);
}
