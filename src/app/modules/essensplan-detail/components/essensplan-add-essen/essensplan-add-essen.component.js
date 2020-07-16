import Template from './essensplan-add-essen.template.js'

export default class EssensplanAddEssenComponent extends HTMLElement {

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
        this.getSpeisekarte();

        // Change Eventlistener
        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        const form = this.dom.addEssenToEssensplanForm;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addEssenToEssensplan(this.dom.essenSelectValue, this.dom.wochenTagSelectValue);
        });
    }

    getSpeisekarte() {
        // As Attribute?
        const speisekarteUrl = 'http://localhost:8080/essen'
        const request = new XMLHttpRequest();
        request.open('GET', speisekarteUrl, true);
        request.addEventListener('load', (event) => {
            this.renderSpeisekarte(JSON.parse(event.target.response));
        });
        request.send();
    }

    renderSpeisekarte(assets) {
        let speisekarte = [];
        for (let i = 0; i < assets.length; i++) {
            speisekarte[i] = {
                id: assets[i].id,
                name: assets[i].name,
            };
        }

        let content = '';
        content += '<option disabled selected value> -- select an option --</option>'
        speisekarte.forEach(essen => {
            content += '<option value="' + essen.id + '">' + essen.name + '</option>'
        });
        this.dom.essenSelect.innerHTML = content;
    }

    addEssenToEssensplan(essenId, wochentagId) {
        const url = this.api + this.id + '/add/' + essenId + '/wt=' + wochentagId;
        const request = new XMLHttpRequest();
        request.open('POST', url, true)
        request.setRequestHeader('Content-Type', 'application/json');

        // Check if success
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                alert('Essen wurde zum Essensplan hinzugefügt');
            }
        }
        request.send();
        this.shadowRoot.getElementById('success').classList.add('active');

        setTimeout(function () {
            location.reload()
        }, 500);
    }
}

if (!customElements.get('mp-essensplan-add-essen')) {
    customElements.define('mp-essensplan-add-essen', EssensplanAddEssenComponent);
}
