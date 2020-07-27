export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            essensplanFilter: scope.getElementById('essensplan-filter'),
            essensplanSelect: scope.getElementById('essensplan-select'),
            resetButton: scope.getElementById('reset'),
        }
    },

    html() {
        return `<h3>Essensplan nach Kalenderwoche filtern</h3>
                    <div class="container">
                        <div id="essensplan-filter">
                            <select id="essensplan-select"></select>
                        </div>
                        <button id="reset">Filter zurücksetzen</button>
                    </div>`
    },

    renderEssensplanSelect(essensplan) {
        let html = `<option disabled selected value> -- select an option --</option>`
        for (let i = 0; i < essensplan.length; i++) {
            html += this.renderEssensplan(essensplan[i])
        }
        return html;
    },

    renderEssensplan(essensplan) {
        return `<option value="${essensplan.id}">KW: ${essensplan.kalenderwoche}</option>`;
    },

    css() {
        return `<style>

                </style>`;
    }
}
