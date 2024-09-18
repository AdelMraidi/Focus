const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  mongoose
    .connect("mongodb://localhost:27017/focus")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch(() => {
      console.log("error");
      process.exit(1);
    });
};
