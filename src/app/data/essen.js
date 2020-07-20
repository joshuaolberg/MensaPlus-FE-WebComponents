import EventBus from './eventbus.js'

export default {
    get ESSEN_CHANGE_EVENT() {
        return 'onEssenChange';
    },

    get ESSEN_ADD_ACTION() {
        return 'essenAddAction';
    },

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
    }
    ,

    /*
    get speisekarte() {
        const url = 'http://localhost:8080/essen';
        let speisekarte = [];

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            return res.json()
        }).then(data => {
            speisekarte = data;
        });
        return speisekarte;
    },
     */

    add(name, preis, art) {

        let id = 5;
        let essen = {id, name, preis, art}
        this.speisekarte.push({id: 5, name: 'Test', preis: 5.5, art: 'mit Fleisch'});

        let ce = new CustomEvent(this.ESSEN_CHANGE_EVENT, {
            detail: {
                action: this.ESSEN_ADD_ACTION,
                essen: essen,
            }
        });
        EventBus.dispatchEvent(ce);
    },

    update() {
        console.log('update');
    },

    delete() {
        console.log('delete');
    },

    createId() {
        return 4;
    }
}
