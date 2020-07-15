import Template from './essensplan-remove-essen.template.js'

export default class EssensplanRemoveEssenComponent extends HTMLElement {

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
        this.getEssensplanById(this.id);

        // Change Eventlistener
        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        const form = this.dom.removeEssenFromEssensplanForm;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.removeEssenFromEssensplan(this.dom.essenSelectValue)
        });
    }

    getEssensplanById(id) {
        const request = new XMLHttpRequest();
        request.open('GET', this.api + id);
        request.addEventListener('load', (event) => {
            this.renderEssensplan(JSON.parse(event.target.response));
        });
        request.send();
    }

    renderEssensplan(essensplan) {
        this.dom.essenSelect.innerHTML = '<option disabled selected value> -- select an option --</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Montag?.id + `","wochentagId":"0"}'>` + essensplan.essenProWoche.Montag?.name + '</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Dienstag?.id + `","wochentagId":"1"}'>` + essensplan.essenProWoche.Dienstag?.name + '</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Mittwoch?.id + `","wochentagId":"2"}'>` + essensplan.essenProWoche.Mittwoch?.name + '</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Donnerstag?.id + `","wochentagId":"3"}'>` + essensplan.essenProWoche.Donnerstag?.name + '</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Freitag?.id + `","wochentagId":"4"}'>` + essensplan.essenProWoche.Freitag?.name + '</option>'
    }

    removeEssenFromEssensplan(essen) {
        const selectedEssen = JSON.parse(essen);
        const essenId = selectedEssen.essenId;
        const wochentagId = selectedEssen.wochentagId;

        const url = this.api + this.id + '/delete/' + essenId + '/wt=' + wochentagId;

        const request = new XMLHttpRequest();
        request.open('DELETE', url, true)
        request.setRequestHeader('Content-Type', 'application/json');

        // Check if success
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                alert('Essen wurde vom Essensplan gelöscht');
            }
        }
        request.send();
        this.shadowRoot.getElementById('success').classList.add('active');
    }
}

if (!customElements.get('mp-essensplan-remove-essen')) {
    customElements.define('mp-essensplan-remove-essen', EssensplanRemoveEssenComponent);
}
