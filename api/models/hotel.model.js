import mongoose from "mongoose";

const hotelShema = {
  name: String,
  stars: { type: Number, default: 0 },
  images: Array,
  address: String,
  phone: String,
  email: String,
  description: String,
  owner_id: String,
  whatsapp: Number,
  whatsapp_link: String,
  //services
  wifi: Boolean,
  pool: Boolean,
  restaurant: Boolean,
  gym: Boolean,
  parking: Boolean,
  tv: Boolean,
};

const Hotel = mongoose.model("Hotel", hotelShema, "hotels");

export default Hotel;
