import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

//Export the model
const Food = mongoose.models.food || mongoose.model("food", foodSchema);
export default Food;
