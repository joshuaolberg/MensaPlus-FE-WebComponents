import EssenModule from './modules/essen/essen.module.js'
import EssensplanModule from './modules/essensplan/essensplan.module.js'
import HomeModule from "./modules/home/home.module.js";

import {Router} from '../vaadin-router.js'

// select the DOM node where the route web components are inserted
const outlet = document.querySelector('mp-app-root');

// create a router instance and set the routes config
const router = new Router(outlet);
router.setRoutes([
    {path: '/', component: 'mp-home-module'},
    {path: '/speisekarte', component: 'mp-essen-module'},
    {path: '/essensplan', component: 'mp-essensplan-module'},
]);

/*
class AppModule extends HTMLElement {

    connectedCallback() {
        this.innerHTML = '<app-routing-module></app-routing-module>'
    }
}

customElements.define('mp-app-root', AppModule)
*/
