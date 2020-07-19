import Template from './essen-list.template.js'
import EssenSearchComponent from "../essen-search/essen-search.component.js";

export default class EssenListComponent extends HTMLElement {

    get api() {
        return this.getAttribute('api');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);
        this.getSpeisekarte();
    }

    getSpeisekarte() {
        const request = new XMLHttpRequest();
        request.open('GET', this.api, true);
        request.addEventListener('load', (event) => {
            this.renderSpeisekarte(JSON.parse(event.target.response));
        });
        request.send();
    }

    /* LOOP - Maybe a bit unnecessary */
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
                '<li> <span>ID:</span> <a href="/speisekarte/' + essen.id + '">' + essen.id + '</a></li>' +
                '<li> <span>Preis:</span> ' + essen.preis + '€</li>' +
                '<li> <span>Art:</span> ' + essen.art + '</li>' +
                '</ul>'
                + '</div>';
        });
        this.dom.speisekarte.innerHTML = content;
    }
}

if (!customElements.get('mp-essen-list')) {
    customElements.define('mp-essen-list', EssenListComponent);
}
