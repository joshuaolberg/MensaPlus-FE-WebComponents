export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `
                <h2>Logout</h2>
                <div class="container">
                    <div class="row">
                        <p class="text-center">Sie haben sich erfolgreich ausgeloggt.</p>
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
