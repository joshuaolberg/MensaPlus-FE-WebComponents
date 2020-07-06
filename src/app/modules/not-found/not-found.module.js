export default class NotFoundModule extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: 'open'});
    }

    onAfterEnter(context) {
        this.render({
            pathname: context.pathname
        });
    }

    render(props) {
        this.shadowRoot.innerHTML = `
      <h1>404</h1>
      <p>
        You've tried to open '${props.pathname}' but alas there is nothing there :(
      </p>`;
    }
}

customElements.define('mp-not-found-module', NotFoundModule);

