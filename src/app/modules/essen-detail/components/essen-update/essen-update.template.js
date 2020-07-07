export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            form: scope.getElementById('updateEssenForm'),
            essenId: scope.getElementById('essenId'),
            name: scope.getElementById('name').value,
            preis: scope.getElementById('preis').value,
            art: scope.getElementById('art').value,
        }
    },

    html() {
        return `
                <h2>Update Essen</h2>
                <div class="row">
                    <div class="container">
                        <div id="updateEssen">
                            <form id="updateEssenForm">
                                <div class="form-group">
                                    <label for="essenId">ID:</label>
                                    <span id="essenId"></span>
                                </div>
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
                                <div id="success" class="success">Essen erfolgreich gespeichert.</div>
                                <button id="submit" class="btn" type="submit">Speichern</button>
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
