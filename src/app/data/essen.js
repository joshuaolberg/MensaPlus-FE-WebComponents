export default {

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

    add() {
        console.log('add');
    },

    update() {
        console.log('update');
    },

    delete() {
        console.log('delete');
    },
}
