
import express from 'express';
import UserController from '../controllers/userController.js';

const route = express.Router();
const controller = new UserController;

route.get('/login', controller.loginView);
route.get('/register', controller.registerView);
route.post('/login', controller.login);
route.post('/register', controller.register);
export default route;