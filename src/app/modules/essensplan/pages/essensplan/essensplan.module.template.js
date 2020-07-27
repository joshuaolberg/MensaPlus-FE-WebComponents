import '../../components/essensplan-list/essensplan-list.component.js'
import '../../components/essensplan-add/essensplan-add.component.js'
import '../../components/essensplan-filter/essensplan-filter.component.js'
import '../../components/essensplan-search/essensplan-search.component.js'

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<h1 class="text-center">Essensplan</h1>
                <mp-essensplan-filter></mp-essensplan-filter>
                <mp-essensplan-search></mp-essensplan-search>
                <mp-essensplan-list></mp-essensplan-list>`;
    },

    renderAdminFeatures() {
        return `<mp-essensplan-add></mp-essensplan-add>`
    },

    css() {
        return `<style>
                    :host {
                       font-family: var(--font), sans-serif;
                    }
                    
                    .text-center {
                        text-align: center;
                    }
                </style>`;
    }
}
