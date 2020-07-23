import EventBus from './eventbus.js'

export default {

    get api() {
        return 'http://localhost:8080/essensplan/'
    },

    get ESSENSPLAN_CHANGE_EVENT() {
        return 'onEssensplanChange';
    },

    get ESSENSPLAN_DETAIL_CHANGE_EVENT() {
        return 'onEssensplanDetailChange';
    },

    get ESSENSPLAN_LOAD_ACTION() {
        return 'essensplanLoadAction';
    },

    get ESSENSPLAN_DETAIL_LOAD_ACTION() {
        return 'essensplanDetailLoadAction';
    },

    get ESSENSPLAN_ADD_ACTION() {
        return 'essensplanAddAction';
    },

    get ESSENSPLAN_DETAIL_UPDATE_ACTION() {
        return 'essensplanUpdateAction';
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

    getEssensplanById(id) {
        return fetch(this.api + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            let ce = new CustomEvent(this.ESSENSPLAN_DETAIL_CHANGE_EVENT, {
                detail: {
                    action: this.ESSENSPLAN_DETAIL_LOAD_ACTION,
                    essensplan: data
                }
            });
            EventBus.dispatchEvent(ce);
        });
    },

    addEssensplan(kalenderwoche) {
        let essensplan = {kalenderwoche: kalenderwoche};

        return fetch(this.api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(essensplan),
        }).then(res => {
            return res.json();
        }).then(data => {
            let ce = new CustomEvent(this.ESSENSPLAN_CHANGE_EVENT, {
                detail: {
                    action: this.ESSENSPLAN_ADD_ACTION,
                    essensplan: data,
                }
            });
            EventBus.dispatchEvent(ce);
        });
    },

    updateEssensplan(id, kalenderwoche, essenProWoche) {
        let essensplan = {id: id, kalenderwoche: kalenderwoche, essenProWoche: essenProWoche};

        return fetch(this.api, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(essensplan)
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            let ce = new CustomEvent(this.ESSENSPLAN_DETAIL_CHANGE_EVENT, {
                detail: {
                    action: this.ESSENSPLAN_DETAIL_UPDATE_ACTION,
                    essensplan: data,
                }
            });
            EventBus.dispatchEvent(ce);
        });
    },
}
