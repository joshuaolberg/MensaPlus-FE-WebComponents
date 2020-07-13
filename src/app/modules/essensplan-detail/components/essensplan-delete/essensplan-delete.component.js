import Template from './essensplan-delete.template.js'

// @TODO: Does not work, when Essen is in Essensplan (Modify Backend)
export default class EssensplanDeleteComponent extends HTMLElement {

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
        request.addEventListener('load', (event) => alert('Essensplan gelöscht'));
        request.send();
        window.history.back();
    }
}

if (!customElements.get('mp-essensplan-delete')) {
    customElements.define('mp-essensplan-delete', EssensplanDeleteComponent);
}
