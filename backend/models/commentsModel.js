const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    descripcion: {
      type: Number,
      required: true,
    },
    frecuencia: {
      type: String,
      required: true,
    },
    tipoDeClase: {
      type: String,
      required: true,
    },
    calificacion: {
      type: Number,
      required: true,
    },
    idProfesor: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("course", courseSchema);
