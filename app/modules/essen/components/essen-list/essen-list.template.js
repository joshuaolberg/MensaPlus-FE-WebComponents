export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            speisekarte: scope.getElementById('speisekarte'),
        }
    },

    html() {
        return `<h1>Speisekarte</h1>
                 <div class="row">
                    <div class="container">
                        <div id="speisekarte"></div>
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
