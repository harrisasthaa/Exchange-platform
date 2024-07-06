const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const testschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  confirmpassword: {
    type: String,
    required: true,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

testschema.pre("save", async function (next) {
  
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
      this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12);
    }
    next();
  } catch (err) {
    console.log(err);
  }
});

testschema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    // console.log(err);
    console.log('Error occured in backend while generating token at generateAuthToken go to (schema.js)')
  }
};

const Test = new mongoose.model("Test", testschema);
module.exports = Test;
