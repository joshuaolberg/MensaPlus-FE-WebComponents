import EventBus from './eventbus.js'

export default {

    get api() {
        return 'http://localhost:8080/essen/'
    },

    get ESSEN_CHANGE_EVENT() {
        return 'onEssenChange';
    },

    get ESSEN_DETAIL_CHANGE_EVENT() {
        return 'onEssenDetailChange';
    },

    get ESSEN_LOAD_ACTION() {
        return 'essenLoadAction';
    },

    get ESSEN_DETAIL_LOAD_ACTION() {
        return 'essenDetailLoadAction';
    },

    get ESSEN_ADD_ACTION() {
        return 'essenAddAction';
    },

    get ESSEN_DETAIL_UPDATE_ACTION() {
        return 'essenDetailUpdateAction';
    },

    get ESSEN_DETAIL_DELETE_ACTION() {
        return 'ESSEN_DETAIL_DELETE_ACTION';
    },

    /*
        get speisekarte() {
            return [
                {
                    id: 1,
                    name: 'Burger',
                    preis: 7.50,
                    art: 'mit Fleisch'
                },
                {
                    id: 2,
                    name: 'Fischburger',
                    preis: 10.50,
                    art: 'mit Fisch'
                },
                {
                    id: 3,
                    name: 'Lasagne',
                    preis: 12.50,
                    art: 'mit Fleisch'
                },
            ]
        },
    */

    get speisekarte() {
        return fetch(this.api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            let ce = new CustomEvent(this.ESSEN_CHANGE_EVENT, {
                detail: {
                    action: this.ESSEN_LOAD_ACTION,
                    speisekarte: data,
                }
            });
            EventBus.dispatchEvent(ce);
        });
    },

    getEssenById(id) {
        return fetch(this.api + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            let ce = new CustomEvent(this.ESSEN_DETAIL_CHANGE_EVENT, {
                detail: {
                    action: this.ESSEN_DETAIL_LOAD_ACTION,
                    essen: data,
                }
            });
            EventBus.dispatchEvent(ce);
        })
    },

    addEssen(name, preis, art) {
        let essen = {name: name, preis: preis, art: art};

        return fetch(this.api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(essen),
        }).then(res => {
            return res.json();
        }).then(data => {
            let ce = new CustomEvent(this.ESSEN_CHANGE_EVENT, {
                detail: {
                    action: this.ESSEN_ADD_ACTION,
                    essen: data,
                }
            });
            EventBus.dispatchEvent(ce);
        });
    },

    updateEssen(id, name, preis, art) {
        let essen = {id: id, name: name, preis: preis, art: art}

        return fetch(this.api, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(essen)
        }).then(res => {
            return res.json();
        }).then(data => {
            let ce = new CustomEvent(this.ESSEN_DETAIL_CHANGE_EVENT, {
                detail: {
                    action: this.ESSEN_DETAIL_UPDATE_ACTION,
                    essen: data,
                }
            });
            EventBus.dispatchEvent(ce);
        });
    },

    deleteEssenById(id) {
        return fetch(this.api + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {
            let ce = new CustomEvent(this.ESSEN_DETAIL_CHANGE_EVENT, {
                detail: {
                    action: this.ESSEN_DETAIL_DELETE_ACTION,
                }
            });
            EventBus.dispatchEvent(ce);
        });
    },
}
