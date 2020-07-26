import '../../components/essensplan-detail/essensplan-detail.component.js'
import '../../components/essensplan-delete/essensplan-delete.component.js'
import '../../components/essensplan-update/essensplan-update.component.js'
import '../../components/essensplan-add-essen/essensplan-add-essen.component.js'
import '../../components/essensplan-remove-essen/essensplan-remove-essen.component.js'

export default {
    render(id) {
        return `${this.css()}
                ${this.html(id)}`;
    },

    html(id) {
        return `<mp-essensplan-detail id=${id}></mp-essensplan-detail>`;
    },

    renderAdminFeatures(id) {
        return `<mp-essensplan-update id=${id}></mp-essensplan-update>
                <mp-essensplan-delete id=${id}></mp-essensplan-delete>
                <mp-essensplan-add-essen id=${id}></mp-essensplan-add-essen>
                <mp-essensplan-remove-essen id=${id}></mp-essensplan-remove-essen>`;
    },

    css() {
        return `<style>
                    :host {
                       font-family: var(--font), sans-serif;
                    }
                </style>`;
    }
}
