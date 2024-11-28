import { pool } from '/home/timel_ahs/Compartidos/ApiRest/src/db.js';

// Obtener todas las reservas
export const getAllBooking = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM reservas');
        res.json(rows);  
    } catch (error) {
        res.status(500).send("Error al obtener reservas");
    }
};

export const getBooking = async (req, res) => {
    const { codigo } = req.params;  
    try {
        const [rows] = await pool.query('SELECT * FROM reservas WHERE codigo = ?', [codigo]);  
        if (rows.length === 0) {
            res.status(404).send("Reserva no encontrada");
        } else {
            res.json(rows[0]); 
        }
    } catch (error) {
        res.status(500).send("Error al obtener la reserva");
    }
};

export const createBooking = async (req, res) => {
    const { codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida } = req.body;  
    try {
        const [result] = await pool.query(
            'INSERT INTO reservas (codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida) VALUES (?, ?, ?, ?, ?, ?)', 
            [codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida]
        );

        res.status(201).send({ 
            codigo_habitacion,
            nombre_cliente,
            telefono_cliente,
            fecha_reservacion,
            fecha_entrada,
            fecha_salida,
            id: result.insertId  
        });
    } catch (error) {
        console.error(error);  
        res.status(500).send("Error al crear la reserva");
    }
};


export const updateBooking = async (req, res) => {
    const { id } = req.params;  
    const { nombre, fecha, tipo } = req.body; 
    try {
        const [result] = await pool.query('UPDATE reservas SET nombre = ?, fecha = ?, tipo = ? WHERE id = ?', [nombre, fecha, tipo, id]);
        if (result.affectedRows === 0) {
            res.status(404).send("Reserva no encontrada");
        } else {
            res.send("Reserva actualizada exitosamente");
        }
    } catch (error) {
        res.status(500).send("Error al actualizar la reserva");
    }
};


export const deleteBooking = async (req, res) => {
    const { codigo } = req.params;  
    try {
        const [result] = await pool.query('DELETE FROM reservas WHERE codigo = ?', [codigo]);  
        if (result.affectedRows === 0) {
            res.status(404).send("Reserva no encontrada");
        } else {
            res.send("Reserva eliminada exitosamente");
        }
    } catch (error) {
        res.status(500).send("Error al eliminar la reserva");
    }
};

