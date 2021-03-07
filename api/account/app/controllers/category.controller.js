const Category = require('../models/category');
const Formatter = require('./../util/formatters');

exports.getAllCategories = async (req, res) => {
  Category.find((err, categories) => {
    err ? res.json(err) : res.status(200).json(categories);
  });
};

exports.addCategory = async (req, res) => {
  const newCategory = new Category();
  newCategory.name = req.body.name;
  newCategory.utfIcon = req.body.utfIcon;

  newCategory.save((err, createdCategory) => {
    err ? res.status(400).json(Formatter.bindErrorMsg(err)) : res.status(201).json(createdCategory);
  });
};

exports.getCategoryById = async (req, res) => {
  const id = req.params.id;
  Category.findOne({ _id: id }, (err, category) => {
    err ? res.json(err) : res.status(200).json(category);
  });
};

exports.deleteCategoryById = async (req, res) => {
  const id = req.params.id;
  Category.findOneAndDelete({ _id: id }, (err, deletedCategory) => {
    err ? res.status(400).json(err) : res.json(deletedCategory);
  });
};

exports.updateCategoryById = async (req, res) => {
  const id = req.params.id;
  const updatingProperties = req.body;

  await Category.updateOne({ _id: id }, updatingProperties, { runValidators: true });

  await Category.findOne({ _id: id }, (err, category) => {
    err ? res.status(400).json(err) : res.json(category);
  });
};
