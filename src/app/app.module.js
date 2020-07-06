import './modules/essen/essen.module.js';
import './modules/essensplan/essensplan.module.js';
import './modules/home/home.module.js';
import './modules/not-found/not-found.module.js';

import './modules/essen/components/essen-detail/essen-detail.component.js'
import './modules/essen/essen-detail.module.js';

import {Router} from '../vaadin-router.js'

// select the DOM node where the route web components are inserted
const outlet = document.querySelector('mp-app-root');

// create a router instance and set the routes config
const router = new Router(outlet);
router.setRoutes([
    {path: '/', component: 'mp-home-module'},
    {path: '/speisekarte', component: 'mp-essen-module'},
    {path: '/speisekarte/:id', component: 'mp-essen-detail'},
    {path: '/essensplan', component: 'mp-essensplan-module'},
    {path: '(.*)', component: 'mp-not-found-module'},
]);

/*
class AppModule extends HTMLElement {

    connectedCallback() {
        this.innerHTML = '<app-routing-module></app-routing-module>'
    }
}

customElements.define('mp-app-root', AppModule)
*/
