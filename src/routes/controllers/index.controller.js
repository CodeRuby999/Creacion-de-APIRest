import { pool } from '/home/timel_ahs/Compartidos/ApiRest/src/db.js';

export const prueba = async(req, res,) => {
    const [result] = await pool.query('SELECT "hola desde db" as result')
    res.json(result[0])
}