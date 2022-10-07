const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const ROLE_LIST = require("../config/roles_list");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: Object,
      enum: ROLE_LIST,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.signup = async function (newUser) {
  // validation
  if (!newUser.email || !newUser.password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(newUser.email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(newUser.password)) {
    throw Error(
      "Password not strong enough: requirements: minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1"
    );
  }

  const exists = await this.findOne({ email: newUser.email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newUser.password, salt);
  newUser.password = hash;
  const user = await this.create(newUser);

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
