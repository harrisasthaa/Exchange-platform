const express = require("express");
const paths = require("path");
const multer = require("multer");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/Authenticate");
const Test = require("../models/schema");
const Product = require("../models/productSchema");
const Contact = require("../models/contactschema");
const publicpath = paths.join(__dirname, "../public");
router.use(express.urlencoded({ extended: true }));
router.use(express.static(publicpath));

// ***************************************************MULTER WORK******************************************
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, paths.join(__dirname, "../public/uploads/"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + paths.extname(file.originalname));
  },
});
const upload = multer({ storage });
// ********************************************************************************************************

router.post("/additemb", upload.single("image"), async (req, res) => {
  let { name, email, phone, category, tittle, description, price } = req.body;
  const { filename, path } = req.file;
  if (!tittle || !description || !price || !filename || !path)
    return res.status(422).json({ message: "Please fill all the fields " });
  try {
    const product_detail = new Product({
      name,
      email,
      phone,
      category,
      tittle,
      description,
      price,
      filename,
      path,
    });
    const productdata = await product_detail.save();
    if (productdata)
      return res.status(200).json({ message: "Item ADDED successfully" });
  } catch (err) {
    console.log(err);
    console.log("Error at backend at /additemb (POST) request .....");
  }
});

router.get("/getimage/:filename", (req, res) => {
  try {
    const { filename } = req.params;
    if (!filename) {
      throw new Error("Filename is required");
    }

    const imagePath = paths.join(__dirname, "../public/uploads/", filename);
    res.sendFile(imagePath);
  } catch (err) {
    console.log("Error at backend at /getimage/:filename request:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", (req, res) => {
  res.status(200).send("HII I AM BACKEND");
});

router.get("/profileb", authenticate, async (req, res) => {
  try {
    res.status(200).send(req.rootUser);
  } catch (err) {
    console.log("Error at backend at /profileb request .....");
  }
});

router.get("/availableb", authenticate, async (req, res) => {
  try {
    const arrobj1 = await Product.find();
    res.status(200).send(arrobj1);
  } catch (err) {
    console.log(err);
    console.log("Error at backend at /availableb (GET)request .....");
  }
});

router.post("/signinb", async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password)
    return res.status(422).json({ message: "Please filled valid Details" });
  try {
    const user = await Test.findOne({ email });

    if (!user) return res.status(422).json({ message: "Invalid credentials" });

    let result = await bcrypt.compare(password, user.password);
    if (!result)
      return res.status(422).json({ message: "Invalid credentials" });
    else {
      let token = await user.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2300000000),
        httpOnly: true,
      });

      return res.status(200).json({ message: "Sucessfull Login" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signupb", async (req, res) => {
  let { name, email, phone, password, confirmpassword } = req.body;
  if (!name || !email || !phone || !password || !confirmpassword) {
    return res.status(422).json({ error: "Please fill all field properly " });
  }
  if (password !== confirmpassword) {
    return res.status(409).json({ error: "Password not matching " });
  }

  try {
    const userExist = await Test.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ error: "User with This Details already exist" });
    }
    const user = new Test({ name, email, phone, password, confirmpassword });
    const userdata = await user.save();
    if (!userdata) {
      return res
        .status(400)
        .json({ error: "User with This Details already exist" });
    }
    return res.status(200).json({ message: "User registered Sucessfully" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/removeitemb/:id", async (req, res) => {
  try {
    let result = await Product.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({ message: "item deleted" });
    } else {
      return res.status(400).send({ message: "item not deleted" });
    }
  } catch (err) {
    console.log(err);
    console.log("unable to delete item");
  }
});

router.get("/deleteaccountb/:id", async (req, res) => {
  try {
    let id = req.params.id;
    res.clearCookie("jwtoken", { path: "/" });
    let us = await Test.findOne({ _id: id });
    let emailid = us.email;
    await Product.deleteMany({ email: emailid });

    let result = await Test.findByIdAndDelete(id);
    if (result) {
      return res.status(200).send({ message: "item deleted" });
    } else {
      return res.status(400).send({ message: "item not deleted" });
    }
  } catch (err) {
    console.log(err);
    console.log("unable to delete item");
  }
});

router.post("/contactb", async (req, res) => {
  try {
    let { name, email, feedback } = req.body;
    if (!name || !email || !feedback)
      res.status(422).json({ message: "Incorrect Data" });
    const feed = new Contact({ name, email, feedback });
    const feedsaved = await feed.save();
    if (!feedsaved) res.status(400).json({ message: "Something wrong here" });
    return res.status(200).json({ message: "Submitted" });
  } catch (err) {
    console.log(err);
    console.log("error occured at backend /contactb post request");
  }
});

router.get("/logoutb", authenticate, async (req, res) => {
  try {
    res.clearCookie("jwtoken", { path: "/" });
    return res.status(200).send("allow user to logout");
  } catch (err) {
    console.log(err);
    console.log("Error cause while performin logout");
  }
});

module.exports = router;
