import mongoose from "mongoose";

const userShema = {
  first_name: String,
  last_name: String,
  phone: Number,
  email: String,
  password: String,
  photo_url: String,
  dni: Number,
  role: String, // user, owner
};

const User = mongoose.model("User", userShema, "users");

export default User;
