import './modules/home/home.module.js';
import './modules/not-found/not-found.module.js';

import './modules/essen/essen.module.js';
import './modules/essen-detail/essen-detail.module.js';

import './modules/essensplan/essensplan.module.js';
import './modules/essensplan-detail/essensplan-detail.module.js';

import './modules/authentication/auth.module.js';

import {Router} from '../vaadin-router.js'

// select the DOM node where the route web components are inserted
const outlet = document.querySelector('mp-app-root');

// create a router instance and set the routes config
const router = new Router(outlet);
router.setRoutes([
    {path: '/', component: 'mp-home-module'},
    {path: '/login', component: 'mp-auth-module'},
    {
        path: '/speisekarte',
        children: [
            {path: '/', component: 'mp-essen-module'},
            {path: '/:id', component: 'mp-essen-detail-module'}
        ]
    },
    {
        path: '/essensplan',
        children: [
            {path: '/', component: 'mp-essensplan-module'},
            {path: '/:id', component: 'mp-essensplan-detail-module'}
        ]
    },
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
