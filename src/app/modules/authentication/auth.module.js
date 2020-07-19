import './login/login.component.js'

export default class AuthModule extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = '<mp-login-component></mp-login-component>'
    }
}

if (!customElements.get('mp-auth-module')) {
    customElements.define('mp-auth-module', AuthModule);
}
