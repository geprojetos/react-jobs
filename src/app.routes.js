import homeRoutes from './home/home.routes';
import categoriesRoutes from './categories/categories.routes';

const appRoutes = [
    ...homeRoutes,
    ...categoriesRoutes
];

export default appRoutes;