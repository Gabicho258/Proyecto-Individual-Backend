import axios from "axios";

describe("User testing", () => {
  test("should create an user or owner", async () => {
    const userToCreate = {
      first_name: "test",
      last_name: "test1",
      phone: "123456789",
      dni: "12345678",
      email: "test_mail8@gmail.com",
      role: "user", // also can be owner
      password: "123",
    };
    const url = "http://localhost:5000/api/users/create";
    const result = await axios.post(url, userToCreate);
    expect(result.status).toBe(201);
  });
  test("should return a token when we login", async () => {
    const userToLogin = {
      email: "test_mail4@gmail.com",
      password: "123",
      role: "user",
    };
    const url = "http://localhost:5000/api/users/login";
    const result = await axios.post(url, userToLogin);
    expect(result.data).toHaveProperty("token");
  });
  test("should return a 401 Unauthorized if the login can not be done", async () => {
    const userToLoginWrong = {
      email: "test_mail4@gmail.com",
      password: "1234", // correct password = 123
      role: "user",
    };
    const url = "http://localhost:5000/api/users/login";
    try {
      await axios.post(url, userToLoginWrong);
    } catch (error) {
      expect(error.response.status).toBe(401);
    }
  });
  test("should return a 403 if the login is done with a wrong role", async () => {
    const userToLoginWrong = {
      email: "test_mail4@gmail.com",
      password: "123",
      role: "owner", // correct role = user
    };
    const url = "http://localhost:5000/api/users/login";
    try {
      await axios.post(url, userToLoginWrong);
    } catch (error) {
      expect(error.response.status).toBe(403);
    }
  });
  test("should return a 400 bad request if email or password are not sent", async () => {
    const userToLoginWithoutPassword = {
      email: "test_email4@gmail.com",
    };
    const url = "http://localhost:5000/auth/local/login";
    try {
      await axios.post(url, userToLoginWithoutPassword);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });
});
