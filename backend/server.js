require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const coursesRoutes = require("./routes/courses");
const userRoutes = require("./routes/user");

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/courses", coursesRoutes);
app.use("/api/user", userRoutes);

//conect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log("conected to MongoDB & listening on port 4040");
    });
  })
  .catch((error) => {
    console.log(error);
  });
