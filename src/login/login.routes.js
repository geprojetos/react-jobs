import { lazy } from 'react';

const LoginPage = lazy(() => import('./pages/login-page/LoginPage'));
const loginRoutes = [
    {
        exact: false,
        path: '/login',
        component: LoginPage
    }
];

export default loginRoutes;