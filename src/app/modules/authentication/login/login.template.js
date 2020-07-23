export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            container: scope.getElementById('container'),
            login: scope.getElementById('login'),
            form: scope.getElementById('loginForm'),
            username: scope.getElementById('username').value,
            password: scope.getElementById('password').value,
        }
    },

    html() {
        return `<div id="container">
                <div id="login">
                    <h2>Login</h2>
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="username">Benutzername</label>
                             <input class="form-control" id="username" type="text" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Passwort</label>
                            <input class="form-control" id="password" type="password" required>
                        </div>
                        <div id="success" class="success">Sie haben sich erfolgreich angemeldet.</div>
                        <button id="submit" class="btn" type="submit">Login</button>
                    </form>
                </div>
                `
    },

    renderAlreadyLoggedIn() {
        return `<p>Sie sind bereits eingeloggt.</p>`
    },

    css() {
        return `<style>
                    .success, .error {
                        display: none;
                    }
                                    
                    .active {
                        display: block;
                    }
                    
                    .hidden {
                        display: none;
                    }
                </style>`;
    }
}
