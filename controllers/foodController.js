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
