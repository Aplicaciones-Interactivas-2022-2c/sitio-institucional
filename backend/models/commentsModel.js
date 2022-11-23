const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    idCourse: {
      type: Number,
      required: true,
    },
    isBlocked: {
      type: Boolean,
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comment", commentSchema);
