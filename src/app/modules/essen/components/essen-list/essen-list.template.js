export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            speisekarte: scope.querySelector('#speisekarte'),
        }
    },

    html() {
        return `<h1>Speisekarte</h1>
                <div id="container">
                    <ul id="speisekarte"></ul>
                </div>`
    },

    renderSpeisekarte(speisekarte) {
        let html = '';
        for (let i = 0; i < speisekarte.length; i++) {
            html += this.renderEssen(speisekarte[i]);
        }
        return html;
    },

    renderEssen(essen) {
        return `<li>
                    <span class="id">ID: ${essen.id}</span>
                    <span class="name">${essen.name}</span>
                    <span class="details"><a href="/speisekarte/${essen.id}"><button>Details</button></a></span>
                </li>`
    },

    css() {
        return `<style>
                   :host {
                        display: block;
                        margin: 0;
                        padding: 0;
                        max-width: 100%;
                   }
                   
                   h1 {
                        text-align: center;
                   }

                    ul {
                        position: relative;
                        list-style: none;
                    }
                    
                    ul li {
                        position: relative;
                        display: table;
                        left: 50%;
                        transform: translatex(-50%);
                        background: var(--list-color);
                        border-radius: 25px;
                        margin-top: 10px;
                        min-height: 30px;
                        padding: 4px;
                    }
                    
                    ul li span {
                        display:table-cell;
                        vertical-align:middle;
                        font-weight: bold;
                        padding: 10px;
                    }
                   
                    ul li span.id {
                        width: 50px;
                    }
                    
                    ul li span.name {
                        width: 200px;
                        text-align: center;
                    }
                    
                    ul li span.details {
                        width: 70px;
                        text-align: right
                    }
                </style>`;
    }
}
