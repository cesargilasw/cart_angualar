import { environment } from '../../environments/environment';

export const globals = {
  urlBase: environment.apiUrl,
  auth: {
    path: 'auth/',
    register: 'register',
    login: 'login',
    logout: 'logout',
  },
  category: {
    path: 'productCategory'
  },

  product: {
    path: 'product',
    detail: 'product'
  },
  admin: {
    path: 'admin',
    product: 'product'
  },
};
