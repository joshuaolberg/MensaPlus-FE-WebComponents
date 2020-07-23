import Template from './essensplan-list.template.js'
import EssensplanService from '../../../../data/essensplan.service.js'
import EventBus from '../../../../data/eventbus.js'

export default class EssensplanListComponent extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);
        EssensplanService.essensplan;

        EventBus.addEventListener(EssensplanService.ESSENSPLAN_CHANGE_EVENT, e => {
            this.onEssensplanChange(e);
        });
    }

    onEssensplanChange(e) {
        switch (e.detail.action) {
            case EssensplanService.ESSENSPLAN_LOAD_ACTION:
                this.dom.essensplan.innerHTML = Template.renderAll(e.detail.essensplan);
                break;
            case EssensplanService.ESSENSPLAN_ADD_ACTION:
                this.dom.essensplan.innerHTML += Template.renderEssensplan(e.detail.essensplan);
        }
    }
}

if (!customElements.get('mp-essensplan-list')) {
    customElements.define('mp-essensplan-list', EssensplanListComponent);
}
