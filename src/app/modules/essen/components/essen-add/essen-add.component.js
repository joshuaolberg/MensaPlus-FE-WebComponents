import Template from './essen-add.template.js'
import Essen from "../../../../classes/essen.js";

export default class EssenAddComponent extends HTMLElement {

    get api() {
        return this.getAttribute('api');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        // Change Eventlistener
        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        // Form Eventlistener
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
                alert('Essen wurde hinzugefügt');
            }
        }
        request.send(JSON.stringify(essen));

        this.shadowRoot.getElementById('success').classList.add('active');
        //this.EssenListComponent.getSpeisekarte();
        setTimeout(function () {
            location.reload()
        }, 500);
    }
}

if (!customElements.get('mp-essen-add')) {
    customElements.define('mp-essen-add', EssenAddComponent);
}
