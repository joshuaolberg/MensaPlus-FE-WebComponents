import '../../components/essen-detail/essen-detail.component.js';
import '../../components/essen-delete/essen-delete.component.js';
import '../../components/essen-update/essen-update.component.js';

export default {
    render(id) {
        return `${this.css()}
                ${this.html(id)}`;
    },

    html(id) {
        return `<mp-essen-detail id=${id}></mp-essen-detail>`
    },

    renderAdminFeatures(id) {
        return `<mp-essen-update id=${id}></mp-essen-update>
                <mp-essen-delete id=${id}></mp-essen-delete>`
    },

    css() {
        return `<style>
                    :host {
                        font-family: var(--font), sans-serif;
                    }
                </style>`;
    }
}
