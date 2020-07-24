export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            navigation: scope.getElementById('navigation'),
        }
    },

    html() {
        return `<nav id="navigation"></nav>`;
    },

    renderNavigation() {
        return `<a href="/">Home</a> `

    },

    renderLogin() {
        return `<a href="/login">Login</a> `
    },

    renderLogout() {
        return `<a href="/speisekarte">Speisekarte</a>
                <a href="/essensplan">Essensplan</a>
                <a href="/logout">Logout</a>`
    },


    css() {
        return `<style>
                    :host {
                        font-family: var(--font), sans-serif;
                    }
                    
                    nav a {
                        font-size: 22px;
                        text-decoration: none;
                    }
                    
                    nav a:hover {
                        text-decoration: underline;
                    }
                </style>`;
    }
}
