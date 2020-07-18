import Template from './essensplan-update.template.js'
import Essensplan from "../../../../classes/essensplan.js";

// TODO:  Reload Essen-Detail when saved or fix page reload
export default class EssensplanUpdateComponent extends HTMLElement {

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
        this.dom.essensplanId.innerHTML = this.id;

        this.getEssensplanById(this.id);

        // Change Eventlistener
        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        this.dom.form.addEventListener('submit', (event) => {
            event.preventDefault();
            let essensplan = {
                id: this.essensplan.id,
                kalenderwoche: this.dom.kalenderwoche,
                essenProWoche: this.essensplan.essenProWoche
            };
            this.updateEssensplan(essensplan);
        });
    }

    getEssensplanById(id) {
        const request = new XMLHttpRequest();
        request.open('GET', this.api + id);
        request.addEventListener('load', (event) => {
            this.setEssensplan(JSON.parse(event.target.response));
        });
        request.send();
    }

    setEssensplan(essensplan) {
        this.essensplan = new Essensplan(essensplan.id, essensplan.kalenderwoche, essensplan.essenProWoche);
        // Obsolete?
        return this.essensplan;
    }

    updateEssensplan(essensplan) {
        const request = new XMLHttpRequest();
        request.open('PUT', this.api);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener('load', (event) => alert('Essensplan gespeichert'));
        request.send(JSON.stringify(essensplan));

        this.shadowRoot.getElementById('success').classList.add('active');

        setTimeout(() => {
            location.reload()
        }, 500);
    }
}

if (!customElements.get('mp-essensplan-update')) {
    customElements.define('mp-essensplan-update', EssensplanUpdateComponent);
}
