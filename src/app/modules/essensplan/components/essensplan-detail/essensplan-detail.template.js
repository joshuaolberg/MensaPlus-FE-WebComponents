export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            essensplanDetails: scope.getElementById('essensplan-details'),
            btnGoBack: scope.getElementById('go-back'),
        }
    },

    html() {
        return `<h1 id="essen-name"></h1>
                <div id="essensplan-details"></div>
                <div class="text-center">
                    <button id="go-back">Zurück</button>
                </div>
                `
    },

    renderEssensplan(essensplan) {
        return `<h1>KW: ${essensplan.kalenderwoche}</h1>
                <div class="container">
                    <ul>
                        <li>
                            <span>Montag: <a href="/speisekarte/${essensplan.essenProWoche.Montag?.id}">${essensplan.essenProWoche.Montag?.name}</a></span>
                        </li>
                        <li>
                            <span>Dienstag: <a href="/speisekarte/${essensplan.essenProWoche.Dienstag?.id}">${essensplan.essenProWoche.Dienstag?.name}</a></span>
                        </li>
                        <li>
                            <span>Mittwoch: <a href="/speisekarte/${essensplan.essenProWoche.Mittwoch?.id}">${essensplan.essenProWoche.Mittwoch?.name}</a></span>
                        </li>
                        <li>
                            <span>Donnerstag: <a href="/speisekarte/${essensplan.essenProWoche.Donnerstag?.id}">${essensplan.essenProWoche.Donnerstag?.name}</a></span>
                        </li>
                        <li>
                            <span>Freitag: <a href="/speisekarte/${essensplan.essenProWoche.Freitag?.id}">${essensplan.essenProWoche.Freitag?.name}</a></span>
                        </li>
                    </ul>
                    <div class="text-center">
                        <span>ID: ${essensplan.id}</span><br />
                    </div>
                </div>`
    },

    css() {
        return `<style>
                    h1 {
                        text-align: center;
                    }
                    
                    ul {
                        position: relative;
                        list-style: none;
                    }
                    
                    ul li {
                        position: relative;
                        left: 50%;
                        transform: translatex(-50%);
                        max-width: 60%;
                        background: var(--list-color);
                        border-radius: 25px;
                        margin-top: 10px;
                        min-height: 30px;
                        padding: 4px;
                    }
                    
                    ul li span {
                        position: absolute;
                        max-width: 100%;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                        font-weight: bold;
                    }
                    
                    .text-center {
                        text-align: center;
                    }
                </style>`;
    }
}
