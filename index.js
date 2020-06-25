class EssenList extends HTMLElement {

    connectedCallback() {
        this.getSpeisekarte()
    }

    getSpeisekarte() {
        const url = 'http://localhost:8080/essen';
        const request = new XMLHttpRequest();

        request.open('GET', url, true);
        request.addEventListener('load', (event) => {
            this.renderResults(JSON.parse(event.target.response));
        });
        request.send();
    }

    renderResults(assets) {
        let html = '';
        for (let c = 0; c < assets.length; c++) {
            html += '<h1>' + assets[c].name + '</h1>';
        }
        this.innerHTML = html;
    }
}

if (!customElements.get('mp-essen-list')) {
    customElements.define('mp-essen-list', EssenList);
}


