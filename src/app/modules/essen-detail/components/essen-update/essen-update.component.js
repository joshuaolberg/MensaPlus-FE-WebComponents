import Template from './essen-update.template.js'
import EssenService from "../../../../services/essen.service.js";
import EventBus from '../../../../services/eventbus.js'

// TODO: too much MapDOM??
export default class EssenUpdateComponent extends HTMLElement {

    get id() {
        return this.getAttribute('id');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);
        EssenService.getEssenById(this.id);

        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        this.dom.form.addEventListener('submit', (event) => {
            event.preventDefault();
            EssenService.updateEssen(this.id, this.dom.name, this.dom.preis, this.dom.art).then(() => {
                this.shadowRoot.getElementById('success').classList.add('active');
            });
        });

        EventBus.addEventListener(EssenService.ESSEN_DETAIL_CHANGE_EVENT, e => {
            this.onEssenChange(e);
        });
    }

    onEssenChange(e) {
        switch (e.detail.action) {
            case EssenService.ESSEN_DETAIL_LOAD_ACTION:
                this.dom.essenId.innerHTML = e.detail.essen.id;
                let name = this.shadowRoot.getElementById('name');
                let preis = this.shadowRoot.getElementById('preis');
                let art = this.shadowRoot.getElementById('art');
                name.value = e.detail.essen.name;
                preis.value = e.detail.essen.preis;
                art.value = e.detail.essen.art;
                this.dom = Template.mapDOM(this.shadowRoot);
                break;
        }
    }
}

if (!customElements.get('mp-essen-update')) {
    customElements.define('mp-essen-update', EssenUpdateComponent);
}
