import './components/essen-detail/essen-detail.component.js';
import './components/essen-delete/essen-delete.component.js';

export default class EssenDetailModule extends HTMLElement {

    onAfterEnter(context) {
        this.renderEssenDetail({id: context.params.id});
    }

    renderEssenDetail(props) {
        this.innerHTML = '<mp-essen-detail api="http://localhost:8080/essen/" id=' + props.id + '></mp-essen-detail>' +
            '<mp-essen-delete api="http://localhost:8080/essen/" id=' + props.id + '></mp-essen-delete>'
    }
}

if (!customElements.get('mp-essen-detail-module')) {
    customElements.define('mp-essen-detail-module', EssenDetailModule);
}
