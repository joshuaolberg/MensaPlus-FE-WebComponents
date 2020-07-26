export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            form: scope.getElementById('updateEssensplanForm'),
            essensplanId: scope.getElementById('essensplanId'),
            kalenderwoche: scope.getElementById('kalenderwoche').value,
        }
    },

    html() {
        return `
                <h2>Update Essensplan</h2>
                <div class="container">
                    <div class="row">
                        <div id="updateEssensplan">
                            <form id="updateEssensplanForm">
                                <div class="form-group">
                                    <label for="essensplanId">ID:</label>
                                    <span id="essensplanId"></span>
                                </div>
                                <div class="form-group">
                                    <label for="kalenderwoche">Kalenderwoche*</label>
                                    <input class="form-control" id="kalenderwoche" type="text" required>
                                </div>
                                <div id="success" class="success">Essensplan erfolgreich gespeichert.</div>
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
