import asynchandler from "express-async-handler";
import ArticalModel from "../models/ArticalModel.js";
// import storageRef from "../config/firebase.js";

/**
 * @desc Get all articals
 * @route GET /artical
 * @access public
 */
const fetchArticals = asynchandler(async (req, res) => {
  const articals = await ArticalModel.getAllArticals();
  console.log(articals);
  return articals;
});

/**
 * @desc Get one articals
 * @route GET /artical/:id
 * @access public
 */
const fetchArtical = asynchandler(async (req, res) => {
  const id = req.params.id;
  const artical = await ArticalModel.getOneArtical(id);
  return artical;
});

/**
 * @desc Create new artical
 * @route POST /artical
 * @access public
 */
const createArtical = asynchandler(async (req, res) => {
  const { title, body } = req.body;
  const { file } = req; // Assuming you're using a middleware like multer to handle file uploads

  // const data = {
  //   title: title,
  //   body: body,
  // };

  // Generate a unique filename (you can use any logic you prefer)
  const uniqueFileName = `${Date.now()}-${file.originalname}`;

  // Upload the file to Firebase Storage
  const fileRef = storageRef.child(uniqueFileName);
  const snapshot = await fileRef.put(file.buffer);

  // Get the URL of the uploaded image
  const downloadURL = await snapshot.ref.getDownloadURL();

  const artical = await ArticalModel.createArtical(id, data);
  return artical;
});

/**
 * @desc Update artical
 * @route PATCH /artical/:id
 * @access public
 */
const updateArtical = asynchandler(async (req, res) => {
  const id = req.params.id;
  const artical = await ArticalModel.updateArtical(id, body);
  return artical;
});

/**
 * @desc Delete artical
 * @route DELETE /artical/:id
 * @access public
 */
// delete artical
const deleteArtical = asynchandler(async (req, res) => {
  const id = req.params.id;
  const artical = await ArticalModel.DeleteArtical(id);
});

// search fio artical by title
const search = asynchandler(async (req, res) => {});

export {
  fetchArticals,
  fetchArtical,
  createArtical,
  updateArtical,
  deleteArtical,
  search,
};
