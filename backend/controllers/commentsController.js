const comment = require("../models/commentsModel");
const mongoose = require("mongoose");

//get all comments for a course
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


//create a comment 

const createComment = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const course = await course.create({ title, load, reps });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete a comment

const deleteComment = async (req, res) => {
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

//update a comment

const updateComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course" });
  }
  const course = await course.findByIdAndUpdate
  (
    { _id:
    id },
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
  getCourse,
  createComment,
  deleteComment,
  updateComment,
};