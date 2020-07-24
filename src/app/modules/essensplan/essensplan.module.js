import Template from './essensplan.module.template.js'
import AuthenticationService from "../../services/authentication.service.js";

export default class EssensplanModule extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();

        if (AuthenticationService.isAdmin() === true) {
            this.shadowRoot.innerHTML += Template.renderAdminFeatures();
        }
    }
}

if (!customElements.get('mp-essensplan-module')) {
    customElements.define('mp-essensplan-module', EssensplanModule);
}
