export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            addEssensplanForm: scope.getElementById('addEssensplanForm'),
            kalenderwoche: scope.getElementById('kalenderwoche').value,
        }
    },

    html() {
        return `<h1>Essensplan Hinzufügen</h1>
                 <div class="container">
                    <div class="row">
                        <div id="addEssensplan">
                            <form id="addEssensplanForm">
                                <div class="form-group">
                                    <label for="kalenderwoche">Kalenderwoche*</label>
                                    <input class="form-control" id="kalenderwoche" type="number" required>
                                </div>
                                <div id="success" class="success">Essensplan erfolgreich hinzugefügt.</div>
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
                    color: purple;
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
