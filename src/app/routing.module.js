import AuthenticationService from './core/services/authentication.service.js';
import {Router} from '../vaadin-router.js'

import './modules/home/home.module.js';
import './core/not-found/not-found.module.js';

import './modules/essen/pages/essen/essen.module.js';
import './modules/essen/pages/essen-detail/essen-detail.module.js';

import './modules/essensplan/pages/essensplan/essensplan.module.js';
import './modules/essensplan/pages/essensplan-detail/essensplan-detail.module.js';

import './core/authentication/auth.module.js';
import './core/authentication/logout/logout.component.js';

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
