export default {
    render(speisekarte) {
        return `${this.css()}
                ${this.html(speisekarte)}`;
    },

    mapDOM(scope) {
        return {
            speisekarte: scope.getElementById('speisekarte'),
        }
    },

    html(speisekarte) {
        let content = `<h1>Speisekarte</h1>
                            <div class="container">`;

        speisekarte.forEach(essen => {
            content += '<div class="essen-item">' + '<h3>' + essen.name + '</h3>' +
                '<ul>' +
                '<li> <span>ID:</span> <a href="/speisekarte/' + essen.id + '">' + essen.id + '</a></li>' +
                '<li> <span>Preis:</span> ' + essen.preis + '€</li>' +
                '<li> <span>Art:</span> ' + essen.art + '</li>' +
                '</ul>'
                + '</div>';
        });
        return content + '</div>';
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
