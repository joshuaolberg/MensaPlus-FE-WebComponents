import Template from './essensplan-search.template.js'
import EssensplanService from '../../../../core/services/essensplan.service.js'

export default class EssensplanSearchComponent extends HTMLElement {

    static get observedAttributes() {
        return ['searchterm'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'searchterm') {
            EssensplanService.searchEssen(newVal.toLowerCase());
        }
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.dom.searchTerm.addEventListener('input', event => this.searchTerm = event.target.value);
    }

    set searchTerm(val) {
        this.setAttribute('searchTerm', val)
    }

    get searchTerm() {
        return this.getAttribute('searchTerm');
    }
}

if (!customElements.get('mp-essensplan-search')) {
    customElements.define('mp-essensplan-search', EssensplanSearchComponent);
}
