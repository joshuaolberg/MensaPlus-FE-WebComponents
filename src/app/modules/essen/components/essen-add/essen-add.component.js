import Template from './essen-add.template.js'
import Essen from "../../classes/essen.js";

export default class EssenAddComponent extends HTMLElement {

    get api() {
        return this.getAttribute('api');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.shadowRoot.addEventListener('change', e => {
            this.dom = Template.mapDOM(this.shadowRoot)
        });

        // add Essen Eventlistener
        const form = this.dom.addEssenForm;
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (this.dom.name === '') {
                alert('Bitte geben Sie einen Namen an.');
                return;
            }

            let essen = new Essen(this.dom.name, this.dom.preis, this.dom.art);
            this.addEssen(essen);
        });
    }

    addEssen(essen) {
        const request = new XMLHttpRequest();
        request.open('POST', this.api, true);
        request.setRequestHeader("Content-Type", "application/json");

        // Check if success
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                console.log('Essen wurde hinzugefügt')
            } else {
                alert('failed')
            }
        }
        request.send(JSON.stringify(essen));

        this.shadowRoot.getElementById('success').classList.add('active');
    }
}

if (!customElements.get('mp-essen-add')) {
    customElements.define('mp-essen-add', EssenAddComponent);
}
