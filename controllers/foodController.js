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

export const updateFood = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const file = req.file;

  try {
    const food = await Food.findById(id);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    if (file) {
      // Delete the old image file if a new image is provided
      fs.unlink(`uploads/${food.image}`, () => {});
      updates.image = file.filename;
    }

    const updatedFood = await Food.findByIdAndUpdate(id, updates, {
      new: true,
    });

    res.json({
      success: true,
      message: "Food updated successfully",
      data: updatedFood,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
