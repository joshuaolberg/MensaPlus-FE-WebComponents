export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return '<p>Hello World ich bin aus dem Template</p>'

    },

    css() {
        return `<style>
                p {
                    color: blue;
                }
                </style>`;
    }
}
