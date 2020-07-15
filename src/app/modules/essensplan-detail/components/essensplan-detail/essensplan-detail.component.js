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

        /* extract weekdays
        essensplan.essenProWoche.wochentag = Object.keys(essensplan.essenProWoche);
        */

        this.dom.essensplanDetails.innerHTML = '<h1>Essensplan KW ' + essensplan.kalenderwoche + '</h1>' + '<ul>' +
            '<span>ID: </span><a href="/essensplan/' + essensplan.id + '">' + essensplan.id + '</a>' +
            '<li>' + 'Montag: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Montag?.id + '">' + essensplan.essenProWoche.Montag?.name + '</a></li>' +
            '<li>' + 'Dienstag: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Dienstag?.id + '">' + essensplan.essenProWoche.Dienstag?.name + '</a></li>' +
            '<li>' + 'Mittwoch: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Mittwoch?.id + '">' + essensplan.essenProWoche.Mittwoch?.name + '</a></li>' +
            '<li>' + 'Donnerstag: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Donnerstag?.id + '">' + essensplan.essenProWoche.Donnerstag?.name + '</a></li>' +
            '<li>' + 'Freitag: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Freitag?.id + '">' + essensplan.essenProWoche.Freitag?.name + '</a></li>' +
            '</ul>'
    }
}

if (!customElements.get('mp-essensplan-detail')) {
    customElements.define('mp-essensplan-detail', EssensplanDetailComponent);
}
