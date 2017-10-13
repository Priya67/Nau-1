import * as MeetupController from './modules/meetups/controller';
import AuthController from './modules/users/auth_controller';

const passport = require('passport');
var requireLogin = passport.authenticate('local', {session: false});
const passportService = require('./modules/users/passport');

const routes = require('express').Router();

routes.post('/meetups', MeetupController.createMeetup);
routes.get('/meetups', MeetupController.getAllMeetups);
routes.get('/stores', MeetupController.getAllInventories);

routes.route('/signin')
  .post([requireLogin, AuthController.signin]);
routes.post('/signup', AuthController.signup);

export default routes;

 routes.route('/signin')
 .post([requireLogin, AuthController.signin]);
