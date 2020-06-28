import EssenListComponent from './components/essen-list/essen-list.component.js'
import DemoComponent from "./components/demo/demo.component.js";

export default class EssenModule extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<mp-essen-list api="http://localhost:8080/essen"></mp-essen-list> ' +
            '<mp-demo layout="none"></mp-demo>'
    }
}

if (!customElements.get('mp-essen-module')) {
    customElements.define('mp-essen-module', EssenModule);
}
