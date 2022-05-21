import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, authData) => {
      if (!err) next();
      else {
        // Unauthorized
        res.status(401).send();
      }
    });
  } else {
    // Bad request - No token found
    res.status(400).json({ message: "No token provided" });
  }
};
