import Template from './essen.module.template.js';
import AuthenticationService from '../../services/authentication.service.js'

export default class EssenModule extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();

        if (AuthenticationService.isAdmin() === true) {
            this.shadowRoot.innerHTML += Template.renderAdminFeatures();
        }
    }
}

if (!customElements.get('mp-essen-module')) {
    customElements.define('mp-essen-module', EssenModule);
}
