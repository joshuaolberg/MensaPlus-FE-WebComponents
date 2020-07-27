export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            searchTerm: scope.getElementById('searchterm'),
        }
    },

    html() {
        return `<div class="container">
                    <h3>Essen suchen</h3>
                    <label>Essen suchen: </label>
                    <input type="text" id="searchterm" value=""/>
                    <button>Click me</button>
                </div>`
    },

    css() {
        return `<style>

                </style>`;
    }
}
