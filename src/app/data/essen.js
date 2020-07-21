import EventBus from './eventbus.js'

export default {
    get ESSEN_CHANGE_EVENT() {
        return 'onEssenChange';
    },

    get ESSEN_LOAD_ACTION() {
        return 'essenLoadAction';
    },

    get ESSEN_ADD_ACTION() {
        return 'essenAddAction';
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
        const url = 'http://localhost:8080/essen';

        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            return res.json()
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

    addEssen(name, preis, art) {
        const url = 'http://localhost:8080/essen';
        let essen = {name: name, preis: preis, art: art};

        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(essen),
        }).then(() => {
            let ce = new CustomEvent(this.ESSEN_CHANGE_EVENT, {
                detail: {
                    action: this.ESSEN_ADD_ACTION,
                    essen: essen,
                }
            });
            EventBus.dispatchEvent(ce);
        });
    },

    update() {
        console.log('update');
    },

    delete() {
        console.log('delete');
    },
}
