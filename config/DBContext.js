// mongodb+srv://MavlonTurgunov:Hi7ydeXUj7bSlhMV@cluster0.gdu81i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://MavlonTurgunov:Hi7ydeXUj7bSlhMV@cluster0.gdu81i5.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
