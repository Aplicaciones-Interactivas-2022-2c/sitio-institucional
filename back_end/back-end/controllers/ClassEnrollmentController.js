const db = require("../models");
const Class = db.classes;
const student_class = db.student_class;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');


exports.requestClass = async (req, res) => {
  // Validate request
  if (!req.body.id_class) {
    res.status(400).send({
      message: "El contenido no puede estar vacío."
    });
    return;
  }

  const class_request = {
    id_class: req.body.id_class,
    id_student: req.body.id_student,
    status: 'Solicitada',
    timeslot: req.body.timeslot,
    message: req.body.message
  };

  const studentLength = await db.sequelize.query(
    'SELECT * FROM api6.student_classes c WHERE id_class = :id_class AND id_student = :id_student',
    {
      replacements: { id_class: req.body.id_class, id_student: req.body.id_student },
      type: QueryTypes.SELECT
    }
  );

  if (studentLength.length === 0) {
    // Save class request in the database
    student_class.create(class_request)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió un error"
        });
      });
  }
  else {
    res.send({ message: "Ya existe una solicitud para esta clase" })
  }

};

exports.findAllRequests = (req, res) => {
  var condition = [];

  if (req.query.id_student) {
    condition.push({ id_student: req.query.id_student })
  }

  if (req.query.id_class) {
    condition.push({ id_class: req.query.id_class })
  }

  student_class.findAll({
    where: condition,
    include: [{
      as: 'user_student',
      model: db.sequelize.model('user'),
      attributes: {
        exclude: ['password']
    }
    },
    {
      as: 'class_student',
      model: db.sequelize.model('classes'),
    }

    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


exports.updateStudentRequest = (req, res) => {
  const id = req.body.id;

  student_class.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Actualizado exitosamente."
        });
      } else {
        res.send({
          message: `No se pudo actualizar el pedido con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error id=" + id
      });
    });
};