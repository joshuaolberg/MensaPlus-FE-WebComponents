import Template from './essensplan-list.template.js'
import EssensplanService from '../../../../core/services/essensplan.service.js'
import EventBus from '../../../../core/services/eventbus.js'

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
                break;
            case EssensplanService.ESSENSPLAN_FILTER_ACTION:
                this.filterEssensplanById(e.detail.id);
                break;
            case EssensplanService.ESSENSPLAN_SEARCH_ESSEN_ACTION:
                this.searchEssen(e.detail.searchTerm);
                break;
        }
    }

    filterEssensplanById(id) {
        let essensplan = this.shadowRoot.querySelectorAll('div.essensplan-container');
        essensplan.forEach(essensplan => {
            if (essensplan.id !== id && id !== null) {
                essensplan.classList.add('hidden');
            } else if (essensplan.id === id) {
                essensplan.classList.remove('hidden');
            } else if (id === null) {
                essensplan.classList.remove('hidden');
            }
        });
    }

    searchEssen(searchTerm) {
        let essensplan = this.shadowRoot.querySelectorAll('li.essen');
        essensplan.forEach(essensplan => {
            if (essensplan.innerHTML.toLowerCase().search(searchTerm) > -1) {
                essensplan.classList.remove('hidden');
            } else {
                essensplan.classList.add('hidden');
            }
        });
    }
}

if (!customElements.get('mp-essensplan-list')) {
    customElements.define('mp-essensplan-list', EssensplanListComponent);
}
