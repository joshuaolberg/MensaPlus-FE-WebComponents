import Template from './essensplan-filter.template.js'
import EssensplanService from '../../../../core/services/essensplan.service.js'
import EventBus from "../../../../core/services/eventbus.js";

export default class EssensplanFilterComponent extends HTMLElement {

    static get observedAttributes() {
        return ['filter'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'filter') {
            if (newVal === 'null') {
                EssensplanService.filterEssensplan(null);
            } else EssensplanService.filterEssensplan(newVal);
        }
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);
        EssensplanService.essensplan;

        this.dom.essensplanSelect.addEventListener('change', (event) => this.filter = event.target.value);

        this.dom.resetButton.addEventListener('click', () => {
            this.dom.essensplanSelect.selectedIndex = 0;
            this.filter = null;
        });

        EventBus.addEventListener(EssensplanService.ESSENSPLAN_CHANGE_EVENT, e => {
            this.onEssensplanChange(e);
        });
    }

    onEssensplanChange(e) {
        switch (e.detail.action) {
            case EssensplanService.ESSENSPLAN_LOAD_ACTION:
                this.dom.essensplanSelect.innerHTML = Template.renderEssensplanSelect(e.detail.essensplan);
                break;
            case EssensplanService.ESSENSPLAN_ADD_ACTION:
                this.dom.essensplanSelect.innerHTML += Template.renderEssensplan(e.detail.essensplan);
        }
    }

    set filter(val) {
        this.setAttribute('filter', val)
    }

    get filter() {
        return this.getAttribute('filter');
    }
}

if (!customElements.get('mp-essensplan-filter')) {
    customElements.define('mp-essensplan-filter', EssensplanFilterComponent);
}
