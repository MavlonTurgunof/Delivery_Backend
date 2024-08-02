import { connectDB } from "./config/DBContext.js";
import app from "./app.js";

connectDB();
const port = 4000;
app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
