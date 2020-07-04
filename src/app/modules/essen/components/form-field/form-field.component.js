const template = document.createElement('template');
template.innerHTML = `
<style>:host {
    margin-bottom: 10px;
    display: block;
}

.form-field {
    display: table;
}

label,
input {
    display: table-cell;
}

label {
    padding-right: 10px;
}

.error {
    display: block;
}

.hidden {
    display: none;
}

::sloted(span) {
    color: grey;
    font-style: italic;
    padding-left: 10px;
}

</style>
<div class="form-field">
    <label>Enter name:</label>
    <input type="text" />
 	<span class="error hidden">This field is required!</span>
</div>`;


class FormFieldComponent extends HTMLElement {

    get invalid() {
        return this.hasAttribute("invalid");
    }

    set invalid(value) {
        if (!!value) {
            this.setAttribute("invalid", "");
        } else {
            this.removeAttribute("invalid");
        }
    }

    static get observedAttributes() {
        return ["label", "type", "error-message"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Moin');
        switch (name) {
            case "label":
                this.$label.innerText = newValue;
                break;
            case "type":
                this.$input.type = newValue;
                break;
            case "error-message":
                this.$error.innerText = newValue;
                break;
            case "invalid":
                this.handleInvalidState(newValue);
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        if (this.$input.isConnected) {
            this.$input.addEventListener("blur", (event) => {
                if (!event.target.value && this.hasAttribute("required")) {
                    this.invalid = true;
                    this.$error.innerText = "This field is required."
                } else {
                    this.invalid = false;
                    this.value = event.target.value;
                }
            });
        }
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.$label = this.shadowRoot.querySelector("label");
        this.$input = this.shadowRoot.querySelector("input");
        this.$error = this.shadowRoot.querySelector(".error");

    }

    handleInvalidState(newValue) {
        if (value !== null) {
            this.$error.classList.remove("hidden");
            this.$input.classList.add("invalid-field");
        } else {
            this.$error.classList.add("hidden");
            this.$input.classList.remove("invalid-field");
        }
    }
}

window.customElements.define('mp-form-field', FormFieldComponent);
