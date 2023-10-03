import pool from "../config/db.js";

const Artical_CategoryModel = {
  filter: async () => {
    const req = "";
    try {
      const connection = pool.getConnection();
      try {
        const res = await connection.query(req);
        connection.release();
        return res;
      } catch (err) {
        connection.release();
        throw err;
      }
    } catch (err) {
      throw err;
    }
  },
};

export default Artical_CategoryModel;
