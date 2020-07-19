export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            searchTerm: scope.getElementById('searchterm').value,
        }
    },

    html() {
        return `<div class="row">
                    <div class="container">
                        <h1>Essen suchen</h1>
                        <label>Essen suchen: </label>
                        <input type="text" id="searchterm" value=""/>
                    </div>
                 </div>
                `
    },

    css() {
        return `<style>
                    h1 {
                    color: blue;
                    }
                </style>`;
    }
}
