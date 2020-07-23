import './components/essensplan-list/essensplan-list.component.js'
import './components/essensplan-add/essensplan-add.component.js'

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<mp-essensplan-list></mp-essensplan-list>`;
    },

    renderAdminFeatures() {
        return `<mp-essensplan-add></mp-essensplan-add>`
    },

    css() {
        return `<style>
                    :host {
                       font-family: var(--font), sans-serif;
                    }
                </style>`;
    }
}
