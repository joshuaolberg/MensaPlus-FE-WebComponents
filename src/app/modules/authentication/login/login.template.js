export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            form: scope.getElementById('loginForm'),
            username: scope.getElementById('username').value,
            password: scope.getElementById('password').value,
        }
    },

    html() {
        return `
                <h2>Login</h2>
                <div class="container">
                    <div class="row">
                        <div id="login">
                            <form id="loginForm">
                                <div class="form-group">
                                    <label for="username">Benutzername</label>
                                    <input class="form-control" id="username" type="text" required>
                                </div>
                                <div class="form-group">
                                    <label for="password">Passwort</label>
                                    <input class="form-control" id="password" type="password" required>
                                </div>
                                <div id="success" class="success">Essensplan erfolgreich gespeichert.</div>
                                <button id="submit" class="btn" type="submit">Login</button>
                            </form>                
                        </div>
                    </div>
                </div>
                `
    },

    css() {
        return `<style>
                    .success, .error {
                        display: none;
                    }
                                    
                    .active {
                        display: block;
                    }
                </style>`;
    }
}
