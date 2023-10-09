import pool from "../config/db.js";

const CategoryModel = {
  getAllCategory: async () => {
    const req = "SELECT * FROM Category";
    try {
      const [row, fields] = await pool.query(req);
      pool.releaseConnection();
      return row;
    } catch (err) {
      pool.releaseConnection();
      throw err;
    }
  },
};

export default CategoryModel;
