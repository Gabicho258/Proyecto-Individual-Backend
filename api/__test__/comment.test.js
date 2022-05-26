import axios from "axios";

describe("Comment testing", () => {
  const hotel1ID = "628ff5c419d5c1b303ac91a5";
  let tokenUser, userID, userName;
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
    userName = dataUser.name;
  });
  test("should create a comment 201 Created", async () => {
    const commentToCreate = {
      author_name: userName,
      hotel_id: hotel1ID,
      author_id: userID,
      rating: 5,
      comment: "This is a comment",
    };
    const url = `http://localhost:5000/api/comments/create/${hotel1ID}`;
    const { status } = await axios.post(url, commentToCreate, {
      headers: { Authorization: `Bearer ${tokenUser}` },
    });
    expect(status).toBe(201);
  });
  test("should return an array of comments by hotel id", async () => {
    const url = `http://localhost:5000/api/comments/${hotel1ID}`;
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${tokenUser}` },
    });
    expect(data).toBeInstanceOf(Array);
  });
});
