import EssenSearchComponent from './components/essen-search/essen-search.component.js'
import EssenListComponent from './components/essen-list/essen-list.component.js'
import EssenAddComponent from './components/essen-add/essen-add.component.js'

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<mp-essen-search searchterm=""></mp-essen-search>
                <div id="divider-line"></div>
                <mp-essen-list api="http://localhost:8080/essen"></mp-essen-list>
                <div id="divider-line"></div>
                <mp-essen-add api="http://localhost:8080/essen" name=""></mp-essen-add>`;
    },

    css() {
        return `<style>
                    :host {
                       display: flex;
                    }
                    
                    mp-essen-list,
                    mp-essen-search,
                    mp-essen-add {
                        flex: 1;
                        height: 100%;
                        background-color: #eaeaea;
                    }
                    
                    #divider-line {
                        width: 1px;
                        height: 100%;
                        margin-right: 25px;
                        background-color: black;
                    }
                </style>`;
    }
}
