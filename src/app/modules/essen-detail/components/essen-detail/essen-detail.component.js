import Template from './essen-detail.template.js'

export default class EssenDetailComponent extends HTMLElement {

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
        this.getEssenById(this.id);

        this.dom.btnGoBack.addEventListener('click', () => window.history.back());
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
        this.dom.essenDetails.innerHTML = '<h1>' + essen.name + ' Details</h1>' +
            '<ul>' +
            '<li> <span>ID: </span>' + essen.id + '</li>' +
            '<li> <span>Name: </span>' + essen.name + '</li>' +
            '<li> <span>Preis: </span>' + essen.preis + '</li>' +
            '<li> <span>Art: </span>' + essen.art + '</li>' +
            '</ul>';
    }
}

if (!customElements.get('mp-essen-detail')) {
    customElements.define('mp-essen-detail', EssenDetailComponent);
}
