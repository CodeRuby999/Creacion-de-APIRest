import { Router } from "express";
import { getAllRooms, getRoom, createRoom, updateRoom, deleteRoom } from '/home/timel_ahs/Compartidos/ApiRest/src/routes/controllers/rooms.controller.js';

const router = Router();

router.get('/rooms', getAllRooms);

router.get('/rooms/:codigo', getRoom);  

router.post('/rooms', createRoom);

router.patch('/rooms/:codigo', updateRoom);  

router.delete('/rooms/:codigo', deleteRoom);  

export default router;
