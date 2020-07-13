import Template from "./essensplan-detail.template.js";

export default class EssensplanDetailComponent extends HTMLElement {

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

        this.dom.btnGoBack.addEventListener('click', () => window.history.back());
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

        // extract weekdays
        essensplan.essenProWoche.wochentag = Object.keys(essensplan.essenProWoche);

        this.dom.essensplanDetails.innerHTML = '<h1>KW: ' + essensplan.kalenderwoche + '</h1>' + '<ul>' +
            '<span>ID: </span>' + essensplan.id + '</a>' +
            '<li>' + essensplan.essenProWoche.wochentag[0] + ': ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Montag?.id + '">' + essensplan.essenProWoche.Montag?.name + '</a></li>' +
            '<li>' + essensplan.essenProWoche.wochentag[1] + ': ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Dienstag?.id + '">' + essensplan.essenProWoche.Dienstag?.name + '</a></li>' +
            '<li>' + essensplan.essenProWoche.wochentag[2] + ': ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Mittwoch?.id + '">' + essensplan.essenProWoche.Mittwoch?.name + '</a></li>' +
            '<li>' + essensplan.essenProWoche.wochentag[3] + ': ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Donnerstag?.id + '">' + essensplan.essenProWoche.Donnerstag?.name + '</a></li>' +
            '<li>' + essensplan.essenProWoche.wochentag[4] + ': ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Freitag?.id + '">' + essensplan.essenProWoche.Freitag?.name + '</a></li>' +
            '</ul>'
    }
}

if (!customElements.get('mp-essensplan-detail')) {
    customElements.define('mp-essensplan-detail', EssensplanDetailComponent);
}
