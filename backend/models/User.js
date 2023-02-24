const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, uppercase: true, trim: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
 
});
module.exports = User = mongoose.model("user", userSchema);
