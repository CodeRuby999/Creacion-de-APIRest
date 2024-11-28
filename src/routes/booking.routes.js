import { Router } from "express";
import { getBooking,getAllBooking,createBooking,updateBooking,deleteBooking } from "/home/timel_ahs/Compartidos/ApiRest/src/routes/controllers/booking.controller.js";

const router = Router();


router.get('/bookings', getAllBooking)

router.get('/bookings/:codigo',getBooking)

router.post('/bookings',createBooking)

router.patch('/bookings/:codigo',updateBooking)

router.delete('/bookings/:codigo',deleteBooking)


export default router;