import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '3600208',
    port: 3306,
    database: 'webdb',


})