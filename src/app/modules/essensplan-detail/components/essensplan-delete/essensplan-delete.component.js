import Template from './essensplan-delete.template.js'
import EssensplanService from '../../../../data/essensplan.service.js'

// @TODO: Does not work, when Essen is in Essensplan (Modify Backend)
export default class EssensplanDeleteComponent extends HTMLElement {

    get id() {
        return this.getAttribute('id');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.dom.btnDelete.addEventListener('click', () => {
            EssensplanService.deleteEssensplan(this.id)
                .then(() => alert('Essensplan erfolgreich gelöscht'))
                .then(() => window.history.back());
        });
    }
}

if (!customElements.get('mp-essensplan-delete')) {
    customElements.define('mp-essensplan-delete', EssensplanDeleteComponent);
}
