import AuthenticationService from './services/authentication.service.js';

import './modules/home/home.module.js';
import './modules/not-found/not-found.module.js';

import './modules/essen/essen.module.js';
import './modules/essen-detail/essen-detail.module.js';

import './modules/essensplan/essensplan.module.js';
import './modules/essensplan-detail/essensplan-detail.module.js';

import './modules/authentication/auth.module.js';
import './modules/authentication/logout/logout.component.js';

import {Router} from '../vaadin-router.js'

setTimeout(() => {

    // select the DOM node where the route web components are inserted
    const outlet = document.querySelector('mp-app-root').shadowRoot.querySelector('app-routing-module');

    // create a router instance and set the routes config
    const router = new Router(outlet);
    router.setRoutes([
        {path: '/', component: 'mp-home-module'},
        {path: '/login', component: 'mp-auth-module'},
        {path: '/logout', component: 'mp-logout-component'},
        {
            path: '/speisekarte',
            action: (context, commands) => {
                if (AuthenticationService.isLoggedIn() === false) return commands.redirect('/login');
            },
            children: [
                {path: '/', component: 'mp-essen-module'},
                {path: '/:id', component: 'mp-essen-detail-module'}
            ]
        },
        {
            path: '/essensplan',
            action: (context, commands) => {
                if (AuthenticationService.isLoggedIn() === false) return commands.redirect('/login');
            },
            children: [
                {path: '/', component: 'mp-essensplan-module'},
                {path: '/:id', component: 'mp-essensplan-detail-module'}
            ]
        },
        {path: '(.*)', component: 'mp-not-found-module'},
    ]);
});
