import Template from './home.module.template.js'
import AuthenticationService from "../../core/services/authentication.service.js";

export default class HomeModule extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();

        if (AuthenticationService.isAdmin() === true) {
            this.shadowRoot.innerHTML += Template.loggedInAdmin()
        } else if (AuthenticationService.isLoggedIn() === true && AuthenticationService.isAdmin() === false) {
            this.shadowRoot.innerHTML += Template.loggedInUser()
        } else this.shadowRoot.innerHTML += Template.notLoggedIn();
    }
}

if (!customElements.get('mp-home-module')) {
    customElements.define('mp-home-module', HomeModule);
}
