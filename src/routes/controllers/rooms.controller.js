import { pool } from '/home/timel_ahs/Compartidos/ApiRest/src/db.js';

export const getAllRooms = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM habitaciones');
        res.send(rows);
    } catch (error) {
        res.status(500).send({ message: "Error al obtener las habitaciones", error });
    }
};


export const getRoom = async (req, res) => {
    const { codigo } = req.params; 
    try {
        const [rows] = await pool.query('SELECT * FROM habitaciones WHERE codigo = ?', [codigo]);
        if (rows.length === 0) {
            return res.status(404).send({ message: "Habitación no encontrada" });
        }
        res.send(rows[0]); 
    } catch (error) {
        res.status(500).send({ message: "Error al consultar la habitación", error });
    }
};

export const createRoom = async (req, res) => {
    const { numero, tipo, valor } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO habitaciones (numero, tipo, valor) VALUES (?, ?, ?)',
            [numero, tipo, valor]
        );
        res.send({
            codigo: rows.insertId, 
            numero,
            tipo,
            valor,
        });
    } catch (error) {
        res.status(500).send({ message: "Error al crear la habitación", error });
    }
};

export const updateRoom = async (req, res) => {
    const { codigo } = req.params; 
    const { numero, tipo, valor } = req.body; 
    try {
        const [result] = await pool.query(
            'UPDATE habitaciones SET numero = ?, tipo = ?, valor = ? WHERE codigo = ?',
            [numero, tipo, valor, codigo]
        );
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: "Habitación no encontrada" });
        }
        res.send({ message: "Habitación actualizada correctamente" });
    } catch (error) {
        res.status(500).send({ message: "Error al actualizar la habitación", error });
    }
};

export const deleteRoom = async (req, res) => {
    const { codigo } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM habitaciones WHERE codigo = ?', [codigo]);
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: "Habitación no encontrada" });
        }
        res.send({ message: "Habitación eliminada correctamente" });
    } catch (error) {
        res.status(500).send({ message: "Error al eliminar la habitación", error });
    }
};
