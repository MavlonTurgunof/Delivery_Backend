import Food from "../models/foodModel.js";
import fs from "fs";

export const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new Food({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();

    res.json({
      success: true,
      message: "food added successfully",
      data: {
        food,
      },
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err,
    });
  }
};

export const listFood = async (req, res) => {
  try {
    const list = await Food.find();

    res.json({
      success: true,
      message: "All Foods displayed",
      data: list,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
};

export const removeFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await Food.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Food successfully deleted",
      success: true,
      data: null,
    });
  } catch (err) {
    res.status(201).json({
      success: false,
      message: err,
    });
  }
};
