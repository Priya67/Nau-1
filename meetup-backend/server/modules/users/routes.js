import { Router } from 'express';
import AuthController from './auth_controller';

const routes = new Router();

routes.post('/signin', AuthController.signin);
routes.post('/signup', AuthController.signup);

export default routes;
