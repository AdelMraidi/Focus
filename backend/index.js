const { connectDB } = require("./config/db");
const express = require("express");
const taskRouting = require("./routing/taskRouting");

const app = express();
const cors = require("cors");
connectDB();
app.use(express.json());
app.use(cors());
app.use("/task", taskRouting);
app.listen(8000, () => {
  console.log("Listening to port 8000");
});
