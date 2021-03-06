import EssenListComponent from '../../components/essen-list/essen-list.component.js'
import EssenAddComponent from '../../components/essen-add/essen-add.component.js'

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<mp-essen-list></mp-essen-list>`;
    },

    renderAdminFeatures() {
        return `<mp-essen-add></mp-essen-add>`;
    },

    css() {
        return `<style>
                    :host {
                        font-family: var(--font), sans-serif;
                    }
                </style>`;
    }
}
