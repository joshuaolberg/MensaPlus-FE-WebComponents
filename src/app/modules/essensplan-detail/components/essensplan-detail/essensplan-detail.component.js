import Template from "./essensplan-detail.template.js";
import EssensplanService from "../../../../data/essensplan.service.js";
import EventBus from "../../../../data/eventbus.js";

export default class EssensplanDetailComponent extends HTMLElement {

    get id() {
        return this.getAttribute('id');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        // Load on init
        EssensplanService.getEssensplanById(this.id);

        this.dom.btnGoBack.addEventListener('click', () => window.history.back());

        EventBus.addEventListener(EssensplanService.ESSENSPLAN_DETAIL_CHANGE_EVENT, e => {
            this.onEssensplanChange(e);
        });
    }

    onEssensplanChange(e) {
        switch (e.detail.action) {
            case EssensplanService.ESSENSPLAN_DETAIL_LOAD_ACTION:
                this.dom.essensplanDetails.innerHTML = Template.renderEssensplan(e.detail.essensplan);
                break;
            case EssensplanService.ESSENSPLAN_DETAIL_UPDATE_ACTION:
                this.dom.essensplanDetails.innerHTML = Template.renderEssensplan(e.detail.essensplan);
                break;
            case EssensplanService.ESSENSPLAN_DETAIL_ADD_ESSEN_ACTION:
                this.dom.essensplanDetails.innerHTML = Template.renderEssensplan(e.detail.essensplan);
                break;
            case EssensplanService.ESSENSPLAN_DETAIL_REMOVE_ESSEN_ACTION:
                this.dom.essensplanDetails.innerHTML = Template.renderEssensplan(e.detail.essensplan);
                break;
        }
    }
}

if (!customElements.get('mp-essensplan-detail')) {
    customElements.define('mp-essensplan-detail', EssensplanDetailComponent);
}
