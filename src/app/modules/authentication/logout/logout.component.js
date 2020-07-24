import Template from './logout.template.js'
import AuthenticationService from '../../../services/authentication.service.js'

export default class LogoutComponent extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();

        if (AuthenticationService.isLoggedIn() === true) {
            AuthenticationService.logout();
            window.setTimeout(() => {
                window.location.href = '/';
            }, 1500)
        } else {
            console.log('Sie sind nicht eingeloggt');
            window.setTimeout(() => {
                window.location.href = '/';
            }, 1500)
        }
    }
}

if (!customElements.get('mp-logout-component')) {
    customElements.define('mp-logout-component', LogoutComponent);
}
