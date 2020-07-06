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
        return `<h1 id="essen-name"></h1>
                <div id="essen-details">
                
                </div>
                <button id="go-back">Zurück</button>
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
