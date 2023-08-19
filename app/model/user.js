const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userId: { type: String, required: true },
    query: { type: Number },
  },
  { timestamps: true },
);
const User = mongoose.model("tbl_users", UserSchema);

module.exports = User;
