const { response } = require("express");
const express = require("express");
const {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/CoursesController");

const router = express.Router();

//GET all Courses
router.get("/", getCourses);

//GET a single Course
router.get("/:id", getCourse);

//POST a new Course
router.post("/", createCourse);

//DELETE a new Course
router.delete("/:id", deleteCourse);

//UPDATE a Course
router.patch(updateCourse);

module.exports = router;
