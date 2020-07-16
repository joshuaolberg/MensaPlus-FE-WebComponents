import Template from './essensplan-update.template.js'

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

        // Change Eventlistener
        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        this.dom.form.addEventListener('submit', (event) => {
            event.preventDefault();
            let essensplan = {id: this.id, kalenderwoche: this.dom.kalenderwoche};
            this.updateEssensplan(essensplan);
        });
    }

    updateEssensplan(essensplan) {
        const request = new XMLHttpRequest();
        request.open('PUT', this.api);
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener('load', (event) => alert('Essensplan gespeichert'));
        request.send(JSON.stringify(essensplan));

        this.shadowRoot.getElementById('success').classList.add('active');

        setTimeout(function () {
            location.reload()
        }, 500);
    }
}

if (!customElements.get('mp-essensplan-update')) {
    customElements.define('mp-essensplan-update', EssensplanUpdateComponent);
}
