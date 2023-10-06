import asynchandler from "express-async-handler";
import CategoryModel from "../models/categoryModel.js";

const fetchCategorys = asynchandler(async (req, res) => {
  const Categorys = await CategoryModel.getAllCategory;
  res.status(200).json(Categorys);
});

const fetchCategorysAPI = asynchandler(async (req, res) => {
  const Categorys = await CategoryModel.getAllCategory();
  res.status(200).json(Categorys);
});
const createCategory = asynchandler(async (req, res) => {});

const updateCategory = asynchandler(async (req, res) => {});

const deleteCategory = asynchandler(async (req, res) => {});

export {
  fetchCategorys,
  createCategory,
  updateCategory,
  deleteCategory,
  fetchCategorysAPI,
};
