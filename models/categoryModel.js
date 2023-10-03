import pool from "../config/db.js";

const CategoryModel = {
  getAllCategory: async () => {
    const req = "SELECT * FROM Category";
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

export default CategoryModel;