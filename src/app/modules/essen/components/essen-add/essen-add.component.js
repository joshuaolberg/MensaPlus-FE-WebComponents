import Template from './essen-add.template.js'
import Essen from "../../../../data/essen.js";

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
            Essen.addEssen(this.dom.name, this.dom.preis, this.dom.art).then();
        });
    }
}

if (!customElements.get('mp-essen-add')) {
    customElements.define('mp-essen-add', EssenAddComponent);
}
