export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            addEssenForm: scope.getElementById('addEssenForm'),
            name: scope.getElementById('name').value,
            preis: scope.getElementById('preis').value,
            art: scope.getElementById('art').value,
        }
    },

    html() {
        return `<h1>Essen hinzufügen</h1>
                 <div class="row">
                    <div class="container">
                        <div id="addEssen">
                            <form id="addEssenForm">
                                <div class="form-group">
                                    <label for="name">Name*</label>
                                    <input class="form-control" id="name" type="text" required>
                                </div>
                                <div class="form-group">
                                    <label for="preis">Preis</label>
                                    <input class="form-control" id="preis" type="number">
                                </div>
                                <div class="form-group">
                                    <label for="art">Art</label>
                                    <input class="form-control" id="art" type="text">
                                </div>
                                <div id="success" class="success">Essen erfolgreich hinzugefügt.</div>
                                <div id="error" class="error">Bitte korrigieren Sie Ihre eingaben.</div>
                                <button id="submit" class="btn" type="submit">Hinzufügen</button>
                            </form>                
                        </div>
                    </div>
                 </div>
                `
    },

    css() {
        return `<style>
                    h1 {
                        color: green;
                    }
                    
                    .success, .error {
                        display: none;
                    }
                                    
                    .active {
                        display: block;
                    }
                </style>`;
    }
}
