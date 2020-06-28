import Essen from '../../classes/essen.js'

export default class EssenListComponent extends HTMLElement {

    get api() {
        return this.getAttribute('api');
    }

    connectedCallback() {
        this.templates = document.createElement('div');
        this.appendChild(this.templates);

        const request = new XMLHttpRequest();
        request.open('GET', 'app/modules/essen/components/essen-list/essen-list.component.html', true);
        request.addEventListener('load', (event) => {
            this.templates.innerHTML = event.target.response;
            this.getSpeisekarte();
        });
        request.send();
    }

    getSpeisekarte() {

        // Render Template
        const template = this.templates.querySelector('template');
        if (template) {
            const clone = template.content.cloneNode(true);
            this.templates.innerHTML = '';
            this.templates.appendChild(clone);
        }

        // Render Speisekarte (from API)
        const request = new XMLHttpRequest();
        request.open('GET', this.api, true);
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
                preis: assets[i].preis,
                art: assets[i].art
            };
        }

        let content = '';
        speisekarte.forEach(essen => {
            content += '<div class="essen-item">' + '<h3>' + essen.name + '</h3>' +
                '<ul>' +
                '<li> <span>ID:</span> ' + essen.id + '</li>' +
                '<li> <span>Preis:</span> ' + essen.preis + '</li>' +
                '<li> <span>Art:</span> ' + essen.art + '</li>' +
                '</ul>'
                + '</div>';
        });
        document.getElementById('speisekarte').innerHTML = content;
    }
}

if (!customElements.get('mp-essen-list')) {
    customElements.define('mp-essen-list', EssenListComponent);
}

