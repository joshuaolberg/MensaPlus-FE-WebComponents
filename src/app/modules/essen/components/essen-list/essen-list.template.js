export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            speisekarte: scope.querySelector('#speisekarte'),
        }
    },

    html() {
        return `<h1>Speisekarte</h1>
                <div id="speisekarte"></div>`
    },

    renderSpeisekarte(speisekarte) {
        let html = '';
        for (let i = 0; i < speisekarte.length; i++) {
            html += this.renderEssen(speisekarte[i]);
        }
        return html;
    },

    renderEssen(essen) {
        return `<div class="essen-item">${essen.name}</div>`
    },

    css() {
        return `<style>
                   :host {
                        display: inline-block;
                        font-family: var(--font);
                   }

                    h1 {
                        color: blue;
                    }
                </style>`;
    }
}
