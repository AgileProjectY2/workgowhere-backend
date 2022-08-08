const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Get the authentication token from the `authorization header`
    const token = await req.headers.authorization.split(" ")[1];
    // Check if the token matches the supposed origin
    const decodedToken = jwt.verify(token, "RANDOM-TOKEN");
    // Retrieve the user details of the logged in user
    const user = decodedToken;

    // Pass the user down to the endpoints here
    req.user = user;
    // Pass down functionality to the endpoint
    next();
  } catch (err) {
    res.status(401).json({
      message: "Invalid request!",
      err,
    });
  }
};
