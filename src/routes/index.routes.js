import { Router } from "express";
import { prueba } from '/home/timel_ahs/Compartidos/ApiRest/src/routes/controllers/index.controller.js';

const router = Router();


router.get('/prueba', prueba)

export default router;