import Template from './essen-add.template.js'
import Essen from "../../classes/essen.js";

// TODO: attributeChangedCallback anschauen UND MutationObserver. Was ist der Unterschied?
export default class EssenAddComponent extends HTMLElement {

    get api() {
        return this.getAttribute('api');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.shadowRoot.addEventListener('change', e =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        // add Essen
        const form = this.dom.addEssenForm;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let essen = new Essen(this.dom.name, this.dom.preis, this.dom.art);
            this.addEssen(essen);
        });
    }

    addEssen(essen) {
        const request = new XMLHttpRequest();
        request.open('POST', this.api, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(essen))
    }
}

if (!customElements.get('mp-essen-add')) {
    customElements.define('mp-essen-add', EssenAddComponent);
}
