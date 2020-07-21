import Template from './essen-detail.module.template.js'

export default class EssenDetailModule extends HTMLElement {

    onAfterEnter(context) {
        this.renderEssenDetail({id: context.params.id});
    }

    renderEssenDetail(props) {
        let id = props.id;
        this.innerHTML = Template.render(id);
    }
}

if (!customElements.get('mp-essen-detail-module')) {
    customElements.define('mp-essen-detail-module', EssenDetailModule);
}
