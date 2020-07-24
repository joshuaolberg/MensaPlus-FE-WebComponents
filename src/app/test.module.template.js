import './app.module.js'

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<script type="module" src="./app.module.js"></script>
                <app-routing-module></app-routing-module>`;
    },

    css() {
        return `<style>
                    :host {
                        font-family: var(--font), sans-serif;
                    }
                </style>`;
    }
}
