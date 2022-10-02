const course = require("../models/courseModel");
const mongoose = require("mongoose");

//get all courses
const getCourses = async (req, res) => {
  const courses = await course.find({}).sort({ createdAt: -1 });

  res.status(200).json(courses);
};

//get a single course
const getCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course" });
  }

  const course = await course.findById({ id });

  if (!course) {
    return res.status(404).json({ error: "No such course" });
  }
  res.status(200).json(course);
};

//create a course
const createCourse = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const course = await course.create({ title, load, reps });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workot
const deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course" });
  }
  const course = await course.findByIdAndDelete({ _id: id });
  if (!course) {
    return res.status(404).json({ error: "No such course" });
  }
  res.status(200).json(course);
};

//update a course
const updateCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course" });
  }
  const course = await course.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!course) {
    return res.status(404).json({ error: "No such course" });
  }
  res.status(200).json(course);
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse,
};
