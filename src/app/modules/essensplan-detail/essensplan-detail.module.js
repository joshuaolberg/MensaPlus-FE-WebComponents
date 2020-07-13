import './components/essensplan-detail/essensplan-detail.component.js'
import './components/essensplan-delete/essensplan-delete.component.js'
import './components/essensplan-update/essensplan-update.component.js'

export default class EssensplanDetailModule extends HTMLElement {

    onAfterEnter(context) {
        this.renderEssensplanDetail({id: context.params.id});
    }

    renderEssensplanDetail(props) {
        this.innerHTML = '<mp-essensplan-detail api="http://localhost:8080/essensplan/" id=' + props.id + '></mp-essensplan-detail>' +
            '<mp-essensplan-update api="http://localhost:8080/essensplan" id=' + props.id + '></mp-essensplan-update>' +
            '<mp-essensplan-delete api="http://localhost:8080/essensplan/" id=' + props.id + '></mp-essensplan-delete>' +
            '<mp-essensplan-add-essen></mp-essensplan-add-essen>' +
            '<mp-essensplan-remove-essen></mp-essensplan-remove-essen>'
    }
}

if (!customElements.get('mp-essensplan-detail-module')) {
    customElements.define('mp-essensplan-detail-module', EssensplanDetailModule);
}
