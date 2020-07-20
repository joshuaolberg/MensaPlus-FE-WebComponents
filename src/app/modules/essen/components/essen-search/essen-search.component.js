import Template from './essen-search.template.js'

export default class EssenSearchComponent extends HTMLElement {

    static get observedAttributes() {
        return ['searchterm'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'searchterm') {
            this.doSearch();
        }
    }

    set searchTerm(val) {
        this.setAttribute('searchterm', val)
    }

    get searchTerm() {
        return this.getAttribute('searchTerm');
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.shadowRoot.addEventListener('change', (event) =>
            this.searchTerm = event.target.value
        )

        this.shadowRoot.querySelector('button').addEventListener('click', e => {
            const customEvent = new CustomEvent('myclick', {
                bubbles: true,
                composed: true,
                detail: {message: 'hi', number: 5}
            })
            this.shadowRoot.dispatchEvent(customEvent);
        });
    }

    doSearch() {
    }
}

if (!customElements.get('mp-essen-search')) {
    customElements.define('mp-essen-search', EssenSearchComponent);
}

document.addEventListener('myclick', (e) => {
    console.log('was clicked', e.target, e.currentTarget, e.composedPath());
});
