import './components/essensplan-list/essensplan-list.component.js'
import './components/essensplan-add/essensplan-add.component.js'

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<mp-essensplan-list api="http://localhost:8080/essensplan"></mp-essensplan-list>
                <mp-essensplan-add api="http://localhost:8080/essensplan"></mp-essensplan-add>`;
    },

    css() {
        return `<style>
                    :host {
                       font-family: var(--font), sans-serif;
                    }
                </style>`;
    }
}
