import Template from './essen-detail.template.js'
import EssenService from '../../../../data/essen.js'
import EventBus from '../../../../data/eventbus.js'

export default class EssenDetailComponent extends HTMLElement {

    get api() {
        return this.getAttribute('api');
    }

    get id() {
        return this.getAttribute('id');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        // Load on init
        this.dom.essenDetails.innerHTML = Template.renderEssen(EssenService.getEssenById(this.id));

        this.dom.btnGoBack.addEventListener('click', () => window.history.back());

        EventBus.addEventListener(EssenService.ESSEN_CHANGE_EVENT, e => {
            this.onEssenChange(e);
        });
    }

    onEssenChange(e) {
        switch (e.detail.action) {
            case EssenService.ESSEN_DETAIL_LOAD_ACTION:
                this.dom.essenDetails.innerHTML = Template.renderEssen(e.detail.essen);
                break;
        }
    }
}

if (!customElements.get('mp-essen-detail')) {
    customElements.define('mp-essen-detail', EssenDetailComponent);
}
