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
  wifi: { type: Boolean, default: false },
  pool: { type: Boolean, default: false },
  restaurant: { type: Boolean, default: false },
  gym: { type: Boolean, default: false },
  parking: { type: Boolean, default: false },
  tv: { type: Boolean, default: false },
};

const Hotel = mongoose.model("Hotel", hotelShema, "hotels");

export default Hotel;
