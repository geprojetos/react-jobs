import homeRoutes from './home/home.routes';
import categoriesRoutes from './categories/categories.routes';
import loginRoutes from './login/login.routes';

const appRoutes = [
    ...homeRoutes,
    ...categoriesRoutes,
    ...loginRoutes
];

export default appRoutes;