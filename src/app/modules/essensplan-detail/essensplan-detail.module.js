import Template from "./essensplan-detail.module.template.js";

export default class EssensplanDetailModule extends HTMLElement {

    onAfterEnter(context) {
        this.attachShadow({mode: 'open'});
        this.renderEssensplanDetail({id: context.params.id});
    }

    renderEssensplanDetail(props) {
        let id = props.id;
        this.shadowRoot.innerHTML = Template.render(id);
    }
}

if (!customElements.get('mp-essensplan-detail-module')) {
    customElements.define('mp-essensplan-detail-module', EssensplanDetailModule);
}
