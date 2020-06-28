import DemoTemplate from './demo.template.js'

export default class DemoComponent extends HTMLElement {

    /*
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = DemoTemplate.render();
    }
     */

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = DemoTemplate.render();
    }
}

if (!customElements.get('mp-demo')) {
    customElements.define('mp-demo', DemoComponent);
}
