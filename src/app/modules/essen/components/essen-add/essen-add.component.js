import Template from './essen-add.template.js'
import EssenService from "../../../../core/services/essen.service.js";

// TODO: success message
export default class EssenAddComponent extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        // Change Eventlistener
        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        const form = this.dom.addEssenForm;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            EssenService.addEssen(this.dom.name, this.dom.preis, this.dom.art).then(() => {
                this.shadowRoot.getElementById('success').classList.add('active');
            });
        });
    }
}

if (!customElements.get('mp-essen-add')) {
    customElements.define('mp-essen-add', EssenAddComponent);
}
