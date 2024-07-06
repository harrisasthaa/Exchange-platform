const jwt = require("jsonwebtoken");
const Test = require("../models/schema");
const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await Test.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("user not found with given token");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("User currently Unauthorized (NO TOKEN is provided)");
    console.log(err);
  }
};
module.exports = Authenticate;
