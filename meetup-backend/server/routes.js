import { Router } from 'express';
import * as MeetupController from './modules/meetups/controller';
import AuthController from './modules/users/auth_controller';

const routes = new Router();

routes.post('/meetups', MeetupController.createMeetup);
routes.get('/meetups', MeetupController.getAllMeetups);
routes.get('/stores', MeetupController.getAllInventories);

routes.post('/signin', AuthController.signin);
routes.post('/signup', AuthController.signup);

export default routes;
