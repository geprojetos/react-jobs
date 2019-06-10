import React, { lazy } from 'react';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const homeRoutes = [
    {
        exact: true,
        path: '/',
        component: HomePage
    }
];

export default homeRoutes;