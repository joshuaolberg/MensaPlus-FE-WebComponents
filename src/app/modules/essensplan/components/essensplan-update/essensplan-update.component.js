import Template from './essensplan-update.template.js'
import EssensplanService from "../../../../core/services/essensplan.service.js";
import EventBus from '../../../../core/services/eventbus.js'

// TODO: too much MapDOM??
export default class EssensplanUpdateComponent extends HTMLElement {

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

        this.dom.form.addEventListener('submit', (event) => {
            event.preventDefault();
            EssensplanService.updateEssensplan(this.id, this.dom.kalenderwoche, this.essenProWoche).then(() => {
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
                this.dom.essensplanId.innerHTML = e.detail.essensplan.id;
                let kalenderwoche = this.shadowRoot.getElementById('kalenderwoche');
                kalenderwoche.value = e.detail.essensplan.kalenderwoche;
                this.essenProWoche = e.detail.essensplan.essenProWoche;
                this.dom = Template.mapDOM(this.shadowRoot);
                break;
        }
    }
}

if (!customElements.get('mp-essensplan-update')) {
    customElements.define('mp-essensplan-update', EssensplanUpdateComponent);
}
