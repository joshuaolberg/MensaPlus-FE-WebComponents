import Template from './essen-update.template.js'
import Essen from "../../../../classes/essen.js";

// TODO:  Reload Essen-Detail when saved or fix page reload
export default class EssenUpdateComponent extends HTMLElement {

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
        this.dom.essenId.innerHTML = this.id;
        this.getEssenById(this.id);

        // Change Eventlistener
        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        this.dom.form.addEventListener('submit', (event) => {
            event.preventDefault();
            let essen = {id: this.id, name: this.dom.name, preis: this.dom.preis, art: this.dom.art};
            this.updateEssen(essen);
        });
    }

    getEssenById(id) {
        const request = new XMLHttpRequest();
        request.open('GET', this.api + id);
        request.addEventListener('load', (event) => {
            this.renderEssen(JSON.parse(event.target.response));
        });
        request.send();
    }

    renderEssen(essen) {
        let name = this.shadowRoot.getElementById('name');
        let preis = this.shadowRoot.getElementById('preis');
        let art = this.shadowRoot.getElementById('art');

        name.value = essen.name;
        preis.value = essen.preis;
        art.value = essen.art;
    }

    updateEssen(essen) {
        const request = new XMLHttpRequest();
        request.open('PUT', this.api);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener('load', (event) => alert('Essen erfolgreich gespeichert'));
        request.send(JSON.stringify(essen));

        this.shadowRoot.getElementById('success').classList.add('active');
        setTimeout(function () {
            location.reload()
        }, 500);
    }
}

if (!customElements.get('mp-essen-update')) {
    customElements.define('mp-essen-update', EssenUpdateComponent);
}
