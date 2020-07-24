export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<h1>Herzlich Willkommen bei Mensa Plus</h1>`;
    },

    loggedInUser() {
        return `<p>Sie sind eingeloggt als: <b>User</b></p>`
    },

    loggedInAdmin() {
        return `<p>Sie sind eingeloggt als: <b>Admin</b></p>`
    },

    notLoggedIn() {
        return `<p>Sie sind nicht eingeloggt. Bitte melden Sie sich an.</p>`
    },

    css() {
        return `<style>
                    :host {
                        font-family: var(--font), sans-serif;
                    }
                </style>`;
    }
}
