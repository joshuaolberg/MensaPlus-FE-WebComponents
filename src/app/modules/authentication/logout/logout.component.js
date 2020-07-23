import Template from './logout.template.js'
import AuthenticationService from '../../../data/authentication.service.js'

export default class LogoutComponent extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();

        if (AuthenticationService.isLoggedIn() === true) {
            AuthenticationService.logout();
        } else {
            alert('Sie sind nicht eingeloggt');
        }
    }
}

if (!customElements.get('mp-logout-component')) {
    customElements.define('mp-logout-component', LogoutComponent);
}
