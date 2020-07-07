export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            btnDelete: scope.getElementById('btnDelete'),
        }
    },

    html() {
        return `<h2>Essen löschen?</h2>
                <button id="btnDelete">Löschen</button>`
    },

    css() {
        return `<style>
                    button {
                    color: blue;
                    }
                </style>`;
    }
}
