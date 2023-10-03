import pool from "../config/db.js";

const ArticalModel = {
  getAllArticals: async () => {
    const req = "SELECT * FROM artical";
    try {
      const [row, fields] = await pool.query(req);
      pool.releaseConnection();
      return row;
    } catch (err) {
      pool.releaseConnection();
      throw err;
    }
  },
  getOneArtical: async (id) => {
    const req = "SELECT * FROM artical where id = ?";
    try {
      const [row, fields] = await pool.query(req, params);
      pool.releaseConnection();
      return row;
    } catch (err) {
      connection.releaseConnection();
      throw err;
    }
  },
  createArtical: async (body) => {
    const req = "INSERT Into artical SET ?";

    try {
      const [row, fields] = await connection.query(req, params);
      connection.releaseConnection();
      return row;
    } catch (err) {
      connection.releaseConnection();
      throw err;
    }
  },
  updateArtical: async (id, body) => {
    const req = "update artical SET ? where id = ?";

    try {
      const [row, fields] = await connection.query(req, [body, id]);
      connection.releaseConnection();
      return row;
    } catch (err) {
      connection.release();
      throw err;
    }
  },
  DeleteArtical: async (id) => {
    const req = "Delete artical where id = ?";
    try {
      const res = await connection.query(req, id);
      connection.release();
      return res;
    } catch (err) {
      connection.release();
      throw err;
    }
  },
};

export default ArticalModel;
