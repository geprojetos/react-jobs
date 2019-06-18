import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const homeRoutes = [
    {
        exact: true,
        path: '/',
        component: HomePage,
        name: 'Home'
    }
];

export default homeRoutes;