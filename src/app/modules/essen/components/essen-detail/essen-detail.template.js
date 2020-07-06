export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            essenDetails: scope.getElementById('essen-details'),
        }
    },

    html() {
        return `<h1 id="essen-name"></h1>
                <div id="essen-details">
                
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
