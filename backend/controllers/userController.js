const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id, roles) => {
  return jwt.sign({ _id, roles }, process.env.JWT_KEY, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    // create a token
    const token = createToken(user._id, user.roles);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    image: req.body.image,
  });

  try {
    const user = await User.signup(newUser);

    // create a token
    const token = createToken(user._id, user.roles);

    res.status(200).json({ email: newUser.email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
