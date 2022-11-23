const { response } = require("express");
const express = require("express");
const ROLE_LIST = require("../config/roles_list");
const {
  createComment,
  getComments,
  getComment,
  deleteComment,
  updateComment
} = require("../controllers/commentsController");
const requireAuth = require("../middleware/requireAuth");
const verifyRoles = require("../middleware/verifyRoles");

const router = express.Router();

//GET all Comments
router.get("/", requireAuth, verifyRoles(ROLE_LIST.Alumno), getComments);

//GET a single Comment
router.get("/:id", getComment);

//POST a new Comment
router.post("/", createComment);

//DELETE a new Comment
router.delete("/:id", deleteComment);

//UPDATE a Comment
router.patch(updateComment);

  

module.exports = router;
