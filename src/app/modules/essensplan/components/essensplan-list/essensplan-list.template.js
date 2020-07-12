export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            essensplan: scope.getElementById('essensplan'),
        }
    },

    html() {
        return `<h1>Essensplan</h1>
                 <div class="row">
                    <div class="container">
                        <div id="essensplan"></div>
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
