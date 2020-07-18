import Template from './essensplan-add.template.js'
import Essensplan from '../../../../classes/essensplan.js'

export default class EssensplanAddComponent extends HTMLElement {

    get api() {
        return this.getAttribute('api');
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        this.shadowRoot.addEventListener('change', () =>
            this.dom = Template.mapDOM(this.shadowRoot)
        );

        const form = this.dom.addEssensplanForm;
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (this.dom.kalenderwoche === '') {
                alert('Kalenderwoche fehlt');
                return;
            }

            let essensplan = new Essensplan(this.dom.kalenderwoche)
            this.addEssensplan(essensplan);
        });
    }

    addEssensplan(essensplan) {
        const request = new XMLHttpRequest();
        console.log(this.api)
        request.open('POST', this.api, true);
        request.setRequestHeader("Content-Type", "application/json");

        // Check if success
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                console.log('Essensplan wurde hinzugefügt')
            }
        }
        request.send(JSON.stringify(essensplan));

        this.shadowRoot.getElementById('success').classList.add('active');
        setTimeout(function () {
            location.reload()
        }, 500);
    }
}

if (!customElements.get('mp-essensplan-add')) {
    customElements.define('mp-essensplan-add', EssensplanAddComponent);
}
