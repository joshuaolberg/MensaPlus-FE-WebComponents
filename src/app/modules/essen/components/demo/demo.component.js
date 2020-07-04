export default class DemoComponent extends HTMLElement {

    static get observedAttributes() {
        return ['searchTerm'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (name === 'searchTerm') {
            this.doSearch();
        }
    }

    doSearch() {
        if (this.getAttribute('apiKey') && this.getAttribute('searchTerm')) {
            const url = 'https://poly.googleapis.com/v1/assets?keywords=' + this.getAttribute('searchTerm') + '&format=OBJ&key=' + this.getAttribute('apiKey');

            const request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.addEventListener('load', (event) => {
                this.renderResults(JSON.parse(event.target.response).assets);
            });
            request.send();
        }
    }

    renderResults(assets) {
        let html = '';
        for (let c = 0; c < assets.length; c++) {
            html += '<img src="' + assets[c].thumbnail.url + '" width=”200” height=”150” />';
        }
        this.innerHTML = html;
    }
}

if (!customElements.get('mp-demo')) {
    customElements.define('mp-demo', DemoComponent);
}
