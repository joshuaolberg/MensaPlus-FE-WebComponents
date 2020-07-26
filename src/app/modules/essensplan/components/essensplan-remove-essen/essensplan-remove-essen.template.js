export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            removeEssenFromEssensplanForm: scope.getElementById('removeEssenFromEssensplanForm'),
            essenSelect: scope.getElementById('essenSelect'),
            essenSelectValue: scope.getElementById('essenSelect').value,
        }
    },

    html() {
        return `<h2>Essen vom Essensplan entfernen</h2>
                <div class="container">
                    <div class="row">
                        <div id="removeEssenFromEssensplan">
                            <form id="removeEssenFromEssensplanForm">
                                <div class="form-group">
                                    <label for="essen">Essen</label>
                                    <select class="form-control" id="essenSelect"></select>
                                </div>
                                <div id="success" class="success">Essen erfolgreich gelöscht.</div>
                                <button id="submit" class="btn" type="submit">Entfernen</button>
                            </form>                
                        </div>
                    </div>
                </div>`
    },

    renderEssensplan(essensplan) {
        return '<option disabled selected value> -- select an option --</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Montag?.id + `","wochentagId":"0"}'>` + essensplan.essenProWoche.Montag?.name + '</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Dienstag?.id + `","wochentagId":"1"}'>` + essensplan.essenProWoche.Dienstag?.name + '</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Mittwoch?.id + `","wochentagId":"2"}'>` + essensplan.essenProWoche.Mittwoch?.name + '</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Donnerstag?.id + `","wochentagId":"3"}'>` + essensplan.essenProWoche.Donnerstag?.name + '</option>' +
            `<option value='{"essenId":"` + essensplan.essenProWoche.Freitag?.id + `","wochentagId":"4"}'>` + essensplan.essenProWoche.Freitag?.name + '</option>'
    },

    css() {
        return `<style>
                    h2 {
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
