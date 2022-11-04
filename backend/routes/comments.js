const { response } = require("express");
const express = require("express");
const ROLE_LIST = require("../config/roles_list");
const {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/CoursesController");
const requireAuth = require("../middleware/requireAuth");
const verifyRoles = require("../middleware/verifyRoles");

const router = express.Router();

//GET all Courses
router.get("/", requireAuth, verifyRoles(ROLE_LIST.Alumno), getCourses);

//GET a single Course
router.get("/:id", getCourse);

//POST a new Course
router.post("/", createCourse);

//DELETE a new Course
router.delete("/:id", deleteCourse);

//UPDATE a Course
router.patch(updateCourse);

module.exports = router;
