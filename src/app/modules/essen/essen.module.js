import EssenListComponent from './components/essen-list/essen-list.component.js'
import EssenAddComponent from './components/essen-add/essen-add.component.js'
import EssenSearchComponent from "./components/essen-search/essen-search.component.js";

export default class EssenModule extends HTMLElement {

    connectedCallback() {
        this.innerHTML = '<mp-essen-search searchterm=""></mp-essen-search> ' +
            '<mp-essen-list api="http://localhost:8080/essen"></mp-essen-list> ' +
            '<mp-essen-add api="http://localhost:8080/essen" name=""></mp-essen-add>'
    }
}

if (!customElements.get('mp-essen-module')) {
    customElements.define('mp-essen-module', EssenModule);
}
