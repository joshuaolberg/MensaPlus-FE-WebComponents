import EventBus from './eventbus.js'

export default {

    get api() {
        return 'http://localhost:8080/authenticate'
    },

    login(username, password) {
        return fetch(this.api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        }).then(res => {
            return res.json();
        }).then(data => {
            sessionStorage.setItem('currentUser', JSON.stringify(data));
        })
    },

    logout() {
        sessionStorage.removeItem('currentUser');
    },

    isLoggedIn() {
        if (sessionStorage.getItem('currentUser') === null) {
            return false;
        } else {
            return true;
        }
    },

    isAdmin() {
        if (this.isLoggedIn() === true) {
            let role = JSON.parse(sessionStorage.getItem('currentUser')).role;
            if (role === 'admin') {
                return true;
            } else return false;
        }
    },
}
