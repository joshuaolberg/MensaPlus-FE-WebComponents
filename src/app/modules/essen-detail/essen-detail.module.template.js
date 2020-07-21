import './components/essen-detail/essen-detail.component.js';
import './components/essen-delete/essen-delete.component.js';
import './components/essen-update/essen-update.component.js';

export default {
    render(id) {
        return `${this.css()}
                ${this.html(id)}`;
    },

    html(id) {
        return '<mp-essen-detail api="http://localhost:8080/essen/" id=' + id + '></mp-essen-detail>' +
            '<mp-essen-update api="http://localhost:8080/essen/" id=' + id + '></mp-essen-update>' +
            '<mp-essen-delete api="http://localhost:8080/essen/" id=' + id + '></mp-essen-delete>'
    },

    css() {
        return `<style>
                    :host {
                       //display: flex;
                    }
                </style>`;
    }
}
