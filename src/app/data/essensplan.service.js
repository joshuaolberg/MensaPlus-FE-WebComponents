import EventBus from './eventbus.js'

export default {

    get api() {
        return 'http://localhost:8080/essensplan/'
    },

    get ESSENSPLAN_CHANGE_EVENT() {
        return 'onEssensplanChange';
    },

    get ESSENSPLAN_DETAIL_CHANGE_EVENT() {
        return 'onEssensplanChange';
    },

    get ESSENSPLAN_LOAD_ACTION() {
        return 'essensplanLoadAction';
    },

    get essensplan() {
        return fetch(this.api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            let ce = new CustomEvent(this.ESSENSPLAN_CHANGE_EVENT, {
                detail: {
                    action: this.ESSENSPLAN_LOAD_ACTION,
                    essensplan: data,
                }
            });
            EventBus.dispatchEvent(ce);
        });
    },
}
