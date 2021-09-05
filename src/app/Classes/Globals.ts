import { environment } from '../../environments/environment';

export const Globals = {
  urlBase: environment.apiUrl,
  auth: {
    path: 'auth/',
    register: 'register',
    login: 'login',
    logout: 'logout',
  },
  category: {
    path: 'productCategory',
    questionTypes: 'questionTypes',
  },

  products: {
    path: 'product',
    questionTypes: 'questionTypes',
  },
};
