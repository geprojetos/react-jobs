import { lazy } from 'react';

const CategoriesListPage = lazy(() => import('./pages/categories-list-page/CategoriesListPage'));
const categoriesRoutes = [
    {
        exact: false,
        path: '/categories',
        component: CategoriesListPage
    }
];

export default categoriesRoutes;