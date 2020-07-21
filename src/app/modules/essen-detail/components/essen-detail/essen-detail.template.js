export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            essenDetails: scope.getElementById('essen-details'),
            btnGoBack: scope.getElementById('go-back'),
        }
    },

    html() {
        return `<div id="essen-details"></div>
                <button id="go-back">Zurück</button>
                `
    },

    renderEssen(essen) {
        return `<h1>${essen.name} Details</h1>
                <ul>
                    <li><span>ID: </span>${essen.id}</li>
                    <li><span>Name: </span>${essen.name}</li>
                    <li><span>Preis: </span>${essen.preis}€</li>
                    <li><span>Art: </span>${essen.art}</li>                          
                </ul>
                `

    },

    css() {
        return `<style>
                    h1 {
                    color: red;
                    }
                </style>`;
    }
}
