import { Hotel } from "../models/index.js";

export const getHotelById = async (req, res) => {
  const { id: idHotel } = req.params;
  const hotel = await Hotel.findById(idHotel);
  res.json(hotel);
};

export const getHotelsByOwner = async (req, res) => {
  const { id: idOwner } = req.params;
  const hotels = await Hotel.find({ owner_id: idOwner });
  res.json(hotels);
};

export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const hotel = await newHotel.save();
    hotel && res.status(201).json(hotel);
  } catch (error) {
    response.status(500).json({ error });
  }
};

export const findHotel = async (req, res, next) => {
  const { id: idHotel } = req.params;

  try {
    const hotel = await Hotel.findById(idHotel);
    if (hotel) {
      req.data = { hotel };
      next();
    } else {
      req.status(204).json({ error: "No hotel" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateHotel = async (req, res) => {
  const hotelToUpdate = req.body;
  const { hotel } = req.data;

  try {
    Hotel.updateOne(hotel, hotelToUpdate, async (error, updatedHotel) => {
      if (!error) {
        res.status(200).json(updatedHotel);
      } else res.status(500).send(error);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteHotel = async (req, res) => {
  const { id: idHotel } = req.params;
  try {
    const hotelToDelete = await Hotel.findById(idHotel);
    if (!hotelToDelete) {
      res.status(204).send({ err: "No hotel to delete" });
    } else {
      const deletedHotel = await Hotel.deleteOne(hotelToDelete);
      if (deletedHotel) res.status(200).json(deletedHotel);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllHotels = async (request, response) => {
  try {
    const hotels = await Hotel.find();
    if (hotels.length === 0) response.status(204).send();
    else response.status(200).json(hotels);
  } catch (error) {
    response.status(500).json({ error });
  }
};
