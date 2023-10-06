import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.host,
    user: process.env.user,
    port: process.env.databasePort,
    password: process.env.password,
    database: process.env.database,
    connectionLimit: process.env.connectionLimit,
  })
  .promise();
export default pool;
