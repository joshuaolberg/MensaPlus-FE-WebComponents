import Template from './essen-update.template.js'
import EssenDetailComponent from "../essen-detail/essen-detail.component.js";
// import Essen from "../../../essen/classes/essen";

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

    updateEssen(essen) {
        const request = new XMLHttpRequest();
        request.open('PUT', this.api);
        request.setRequestHeader("Content-Type", "application/json");

        request.addEventListener('load', (event) => console.log('Essen saved'));
        request.send(JSON.stringify(essen));

        this.shadowRoot.getElementById('success').classList.add('active');
    }
}

if (!customElements.get('mp-essen-update')) {
    customElements.define('mp-essen-update', EssenUpdateComponent);
}
