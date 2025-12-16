
import express from 'express';
import DashController from '../controllers/dashController.js';

const route = express.Router();
const controller = new DashController;

route.get("/dashboard", controller.dashboardView);
route.get("/dashboard/listar", controller.listarUsuarios);
export default route;