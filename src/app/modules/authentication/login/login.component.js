import Template from './login.template.js'
import AuthenticationService from '../../../data/authentication.service.js'

export default class LoginComponent extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        this.dom.form.addEventListener('submit', (event) => {
            event.preventDefault();
            AuthenticationService.login(this.dom.username, this.dom.password).then(() => {
                this.shadowRoot.getElementById('success').classList.add('active');
            });
        });

        if (AuthenticationService.isLoggedIn() === true) {
            this.shadowRoot.getElementById('login').classList.add('hidden');
            this.shadowRoot.innerHTML += Template.renderAlreadyLoggedIn();
        }
    }
}

if (!customElements.get('mp-login-component')) {
    customElements.define('mp-login-component', LoginComponent);
}
