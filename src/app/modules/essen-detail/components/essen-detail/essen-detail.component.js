import Template from './essen-detail.template.js'
import EssenService from '../../../../services/essen.service.js'
import EventBus from '../../../../services/eventbus.js'

export default class EssenDetailComponent extends HTMLElement {

    get id() {
        return this.getAttribute('id');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        // Load on init
        EssenService.getEssenById(this.id);

        this.dom.btnGoBack.addEventListener('click', () => window.history.back());

        EventBus.addEventListener(EssenService.ESSEN_DETAIL_CHANGE_EVENT, e => {
            this.onEssenChange(e);
        });
    }

    onEssenChange(e) {
        switch (e.detail.action) {
            case EssenService.ESSEN_DETAIL_LOAD_ACTION:
                this.dom.essenDetails.innerHTML = Template.renderEssen(e.detail.essen);
                break;
            case EssenService.ESSEN_DETAIL_UPDATE_ACTION:
                this.dom.essenDetails.innerHTML = Template.renderEssen(e.detail.essen);
        }
    }
}

if (!customElements.get('mp-essen-detail')) {
    customElements.define('mp-essen-detail', EssenDetailComponent);
}
