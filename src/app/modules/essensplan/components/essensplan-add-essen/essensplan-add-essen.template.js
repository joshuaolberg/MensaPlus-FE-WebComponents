export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            addEssenToEssensplanForm: scope.getElementById('addEssenToEssensplanForm'),
            essenSelect: scope.getElementById('essenSelect'),
            essenSelectValue: scope.getElementById('essenSelect').value,
            wochentagSelect: scope.getElementById('wochentagSelect'),
            wochenTagSelectValue: scope.getElementById('wochentagSelect').value,
        }
    },

    html() {
        return `<h2>Essen zum Essensplan hinzufügen</h2>
                <div class="container">
                    <div class="row">
                        <div id="addEssenToEssensplan">
                            <form id="addEssenToEssensplanForm">
                                <div class="form-group">
                                    <label for="essen">Essen</label>
                                    <select class="form-control" id="essenSelect"></select>
                                </div>
                                <div class="form-group">
                                    <label for="wochentag">Wochentag</label>
                                    <select class="form-control" id="wochentagSelect">
                                        <option disabled selected value> -- select an option -- </option>
                                        <option value="0">Montag</option>
                                        <option value="1">Dienstag</option>
                                        <option value="2">Mittwoch</option>
                                        <option value="3">Donnerstag</option>
                                        <option value="4">Freitag</option>
                                    </select>
                                </div>
                                <div id="success" class="success">Essen erfolgreich hinzugefügt.</div>
                                <div id="error" class="error">Bitte korrigieren Sie Ihre eingaben.</div>
                                <button id="submit" class="btn" type="submit">Hinzufügen</button>
                            </form>                
                        </div>
                    </div>
                </div>`
    },

    renderSpeisekarte(speisekarte) {
        let html = `<option disabled selected value> -- select an option --</option>`
        speisekarte.forEach(essen => {
            html += `<option value="${essen.id}">${essen.name}</option>`
        });
        return html;
    },

    css() {
        return `<style>
                    h1 {
                        color: lightblue;
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
