import express from "express";

import { hotelCtrl } from "../controllers/index.js";
import { isAuthenticated } from "../middlewares/index.js";

const {
  getHotelById,
  createHotel,
  findHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
  getHotelsByOwner,
} = hotelCtrl;

const router = express.Router();

const hotelRoutes = {
  GET_ALL_HOTELS: "/hotels",
  GET_HOTEL_BY_ID: "/hotels/:id",
  GET_HOTEL_BY_OWNER: "/hotels/owner/:id",
  CREATE: "/hotels/create/:id",
  UPDATE: "/hotels/update/:id",
  DELETE: "/hotels/delete/:id",
};

router.get(hotelRoutes.GET_ALL_HOTELS, getAllHotels);
router.get(hotelRoutes.GET_HOTEL_BY_ID, /*isAuthenticated,*/ getHotelById);
router.get(
  hotelRoutes.GET_HOTEL_BY_OWNER,
  /*isAuthenticated,*/ getHotelsByOwner
);
router.post(hotelRoutes.CREATE, /*isAuthenticated,*/ createHotel);
router.put(hotelRoutes.UPDATE, /*isAuthenticated,*/ findHotel, updateHotel);
router.delete(hotelRoutes.DELETE, /*isAuthenticated,*/ deleteHotel);

export default router;
