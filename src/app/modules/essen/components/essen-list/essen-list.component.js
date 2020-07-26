import Template from './essen-list.template.js'
import EssenService from '../../../../core/services/essen.service.js'
import EventBus from '../../../../core/services/eventbus.js'

export default class EssenListComponent extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);
        EssenService.speisekarte;

        EventBus.addEventListener(EssenService.ESSEN_CHANGE_EVENT, e => {
            this.onEssenChange(e);
        });
    }

    onEssenChange(e) {
        switch (e.detail.action) {
            case EssenService.ESSEN_LOAD_ACTION:
                this.dom.speisekarte.innerHTML = Template.renderSpeisekarte(e.detail.speisekarte);
                break;
            case EssenService.ESSEN_ADD_ACTION:
                this.dom.speisekarte.innerHTML += Template.renderEssen(e.detail.essen);
                break;
        }
    }
}

if (!customElements.get('mp-essen-list')) {
    customElements.define('mp-essen-list', EssenListComponent);
}

