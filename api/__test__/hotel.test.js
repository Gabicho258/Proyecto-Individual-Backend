import axios from "axios";

describe("Hotel testing", () => {
  let tokenUser, userID, tokenOwner, ownerID;
  beforeAll(async () => {
    const url = "http://localhost:5000/api/users/login";
    const userToLogin = {
      email: "test_mail4@gmail.com",
      password: "123",
      role: "user",
    };
    const { data: dataUser } = await axios.post(url, userToLogin);
    tokenUser = dataUser.token;
    userID = dataUser._id;

    const ownerToLogin = {
      email: "test_mail3@gmail.com",
      password: "123",
      role: "owner",
    };
    const { data: dataOwner } = await axios.post(url, ownerToLogin);
    tokenOwner = dataOwner.token;
    ownerID = dataOwner._id;
  });

  test("should return 201 Created if a hotel is created", async () => {
    const url = `http://localhost:5000/api/hotels/create/${ownerID}`;
    const num = 6; // ++
    const hotel = {
      name: `Hotel ${num}`,
      phone: "912313",
      whatsapp: "123123123",
      address: `Calle ${num}`,
      email: `hotel${num}@gmail.com`,
      description: `Hotel ${num} description`,
      owner_id: ownerID,
    };
    const response = await axios.post(url, hotel, {
      headers: {
        Authorization: `Bearer ${tokenOwner}`,
      },
    });
    // console.log(response);
    expect(response.status).toBe(201);
  });

  test("should return an array of hotels", async () => {
    const url = "http://localhost:5000/api/hotels";
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${tokenUser}` },
    });
    expect(response.data).toBeInstanceOf(Array);
  });
});
