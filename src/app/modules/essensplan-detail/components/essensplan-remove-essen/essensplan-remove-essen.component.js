import Template from './essensplan-remove-essen.template.js'
import EssensplanService from '../../../../data/essensplan.service.js'
import EventBus from "../../../../data/eventbus.js";

export default class EssensplanRemoveEssenComponent extends HTMLElement {

    get id() {
        return this.getAttribute('id');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);
        EssensplanService.getEssensplanById(this.id);

        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        const form = this.dom.removeEssenFromEssensplanForm;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const selectedEssen = JSON.parse(this.dom.essenSelectValue);
            const essenId = selectedEssen.essenId;
            const wochentagId = selectedEssen.wochentagId;
            EssensplanService.removeEssenFromEssensplan(this.id, essenId, wochentagId).then(() => {
                this.shadowRoot.getElementById('success').classList.add('active');
            });
        });

        EventBus.addEventListener(EssensplanService.ESSENSPLAN_DETAIL_CHANGE_EVENT, e => {
            this.onEssensplanChange(e);
        });
    }

    onEssensplanChange(e) {
        switch (e.detail.action) {
            case EssensplanService.ESSENSPLAN_DETAIL_LOAD_ACTION:
                this.dom.essenSelect.innerHTML = Template.renderEssensplan(e.detail.essensplan);
                break;
            case EssensplanService.ESSENSPLAN_DETAIL_ADD_ESSEN_ACTION:
                this.dom.essenSelect.innerHTML = Template.renderEssensplan(e.detail.essensplan);
                break;
        }
    }
}

if (!customElements.get('mp-essensplan-remove-essen')) {
    customElements.define('mp-essensplan-remove-essen', EssensplanRemoveEssenComponent);
}
