import express from 'express';
import roomsRoutes from './routes/rooms.routes.js'
import indexRoutes from './routes/index.routes.js'
import bookingRoutes from './routes/booking.routes.js'

const app = express();
const PORT = 3000
    
app.use(express.json())
app.use('/h',roomsRoutes)
app.use(indexRoutes)
app.use('/r',bookingRoutes)

app.listen(PORT);
console.log(`El servidor esta corriendo en le puerto  ${PORT}`);


