import Template from './essen-delete.template.js'
import EssenService from '../../../../data/essen.service.js';

export default class EssenDeleteComponent extends HTMLElement {

    get id() {
        return this.getAttribute('id');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.dom.btnDelete.addEventListener('click', () => {
            EssenService.deleteEssenById(this.id)
                .then(() => alert('Essen erfolgreich gelöscht'))
                .then(() => window.history.back());
        });
    }
}

if (!customElements.get('mp-essen-delete')) {
    customElements.define('mp-essen-delete', EssenDeleteComponent);
}
