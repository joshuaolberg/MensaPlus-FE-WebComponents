import Template from './essensplan-add-essen.template.js'
import EssenService from '../../../../data/essen.service.js'
import EssensplanService from '../../../../data/essensplan.service.js'
import EventBus from "../../../../data/eventbus.js";

export default class EssensplanAddEssenComponent extends HTMLElement {

    get id() {
        return this.getAttribute('id');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);
        EssenService.speisekarte;

        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        const form = this.dom.addEssenToEssensplanForm;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            EssensplanService.addEssenToEssensplan(this.id, this.dom.essenSelectValue, this.dom.wochenTagSelectValue).then(() => {
                this.shadowRoot.getElementById('success').classList.add('active');
            });
        });

        EventBus.addEventListener(EssenService.ESSEN_CHANGE_EVENT, e => {
            this.onEssenChange(e);
        });
    }

    onEssenChange(e) {
        switch (e.detail.action) {
            case EssenService.ESSEN_LOAD_ACTION:
                this.dom.essenSelect.innerHTML = Template.renderSpeisekarte(e.detail.speisekarte);
                break;
        }
    }
}

if (!customElements.get('mp-essensplan-add-essen')) {
    customElements.define('mp-essensplan-add-essen', EssensplanAddEssenComponent);
}
