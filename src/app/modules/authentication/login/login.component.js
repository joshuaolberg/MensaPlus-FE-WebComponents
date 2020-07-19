import Template from './login.template.js'

export default class LoginComponent extends HTMLElement {
    isAuthenticated;

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        // Change Eventlistener
        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        this.dom.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.login(this.dom.username, this.dom.password);
        });
    }

    login(username, password) {
        const url = 'http://localhost:8080/authenticate'
        const request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.addEventListener('load', (event) => {
            sessionStorage.setItem('currentUser', JSON.stringify({username, password}));
            this.isAuthenticated = true;
        });
        request.send({username, password});
    }

    isLoggedIn() {
        if (sessionStorage.getItem('currentUser') === null) {
            this.isAuthenticated = false;
        } else {
            this.isAuthenticated = true;
        }
    }
}

if (!customElements.get('mp-login-component')) {
    customElements.define('mp-login-component', LoginComponent);
}
