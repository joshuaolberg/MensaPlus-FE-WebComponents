import Template from './essensplan-add.template.js'
import Essensplan from '../../../../data/essensplan.service.js'

export default class EssensplanAddComponent extends HTMLElement {

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
            Essensplan.addEssensplan(this.dom.kalenderwoche).then(() => {
                this.shadowRoot.getElementById('success').classList.add('active');
            });
        });
    }
}

if (!customElements.get('mp-essensplan-add')) {
    customElements.define('mp-essensplan-add', EssensplanAddComponent);
}
