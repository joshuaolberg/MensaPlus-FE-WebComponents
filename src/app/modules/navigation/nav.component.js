import Template from './nav.component.template.js'
import AuthenticationService from '../../services/authentication.service.js'

export default class NavComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.dom.navigation.innerHTML = Template.renderNavigation();

        if (AuthenticationService.isLoggedIn() === false) {
            this.dom.navigation.innerHTML += Template.renderLogin();
        } else {
            this.dom.navigation.innerHTML += Template.renderLogout();
        }
    }
}

if (!customElements.get('mp-nav')) {
    customElements.define('mp-nav', NavComponent);
}
