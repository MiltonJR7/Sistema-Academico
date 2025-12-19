
import express from 'express';
import DashController from '../controllers/dashController.js';

const route = express.Router();
const controller = new DashController;

route.get("/", controller.dashboardView);
route.get("/listar", controller.listarUsuarios);
export default route;