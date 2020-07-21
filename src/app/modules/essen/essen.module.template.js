import EssenSearchComponent from './components/essen-search/essen-search.component.js'
import EssenListComponent from './components/essen-list/essen-list.component.js'
import EssenAddComponent from './components/essen-add/essen-add.component.js'

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<mp-essen-search searchterm=""></mp-essen-search>
                <mp-essen-list></mp-essen-list>
                <mp-essen-add></mp-essen-add>`;
    },

    css() {
        return `<style>
                    :host {
                       //display: flex;
                    }
                </style>`;
    }
}
