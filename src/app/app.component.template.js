import './core/navigation/nav.component.js'
import './routing.module.js'

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<script type="module" src="./routing.module.js"></script>
                <mp-nav></mp-nav>
                <div class="page-content">
                    <app-routing-module></app-routing-module>
                </div>`;
    },

    css() {
        return `<style>
                    :host {
                        font-family: var(--font), sans-serif;
                    }
                </style>`;
    }
}
