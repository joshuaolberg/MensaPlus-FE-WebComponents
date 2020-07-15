import Template from './essensplan-list.template.js'

export default class EssensplanListComponent extends HTMLElement {

    get api() {
        return this.getAttribute('api');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);
        this.getEssensplan();
    }

    getEssensplan() {
        const request = new XMLHttpRequest();
        request.open('GET', this.api, true);
        request.addEventListener('load', (event) => {
            this.renderEssensplan(JSON.parse(event.target.response));
        });
        request.send();
    }

    renderEssensplan(assets) {
        let essensplan = [];
        for (let i = 0; i < assets.length; i++) {
            essensplan[i] = {
                id: assets[i].id,
                kalenderwoche: assets[i].kalenderwoche,
                essenProWoche: assets[i].essenProWoche,
            }
        }

        /* extract weekdays
        essensplan.forEach(essensplan => {
            essensplan.essenProWoche.wochentag = Object.keys(essensplan.essenProWoche)
        });
        */

        let content = '';
        essensplan.forEach(essensplan => {
            content += '<h1>KW: ' + essensplan.kalenderwoche + '</h1>' + '<ul>' +
                '<span>ID: </span><a href="/essensplan/' + essensplan.id + '">' + essensplan.id + '</a>' +
                '<li>' + 'Montag: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Montag?.id + '">' + essensplan.essenProWoche.Montag?.name + '</a></li>' +
                '<li>' + 'Dienstag: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Dienstag?.id + '">' + essensplan.essenProWoche.Dienstag?.name + '</a></li>' +
                '<li>' + 'Mittwoch: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Mittwoch?.id + '">' + essensplan.essenProWoche.Mittwoch?.name + '</a></li>' +
                '<li>' + 'Donnerstag: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Donnerstag?.id + '">' + essensplan.essenProWoche.Donnerstag?.name + '</a></li>' +
                '<li>' + 'Freitag: ' + '<a href="/speisekarte/' + essensplan.essenProWoche.Freitag?.id + '">' + essensplan.essenProWoche.Freitag?.name + '</a></li>' +
                '</ul>'
                + '<a href="/essensplan/' + essensplan.id + '"/><button class=btn>Anzeigen</button></a>'
        });
        this.dom.essensplan.innerHTML = content;

        /* Solution 2:
        this.dom.essensplan.innerHTML = essensplan.map(h => `<h1>KW: ${h.kalenderwoche} </h1><ul>` +
         Object.entries(h.essenProWoche).map(([wochentag, {name}]) => `<li>${wochentag}: ${name} </li>`).join('\n') + '</ul>').join('\n');
         */
    }
}

if (!customElements.get('mp-essensplan-list')) {
    customElements.define('mp-essensplan-list', EssensplanListComponent);
}
