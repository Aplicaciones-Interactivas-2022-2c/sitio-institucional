'use strict';

module.exports = (sequelize, DataTypes) => {

  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "El nombre sólo puede contener letras."
        },
        len: {
          args: [2, 255],
          msg: "El nombre debe contener al menos dos caracteres."
        }
      }
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "El apellido sólo puede contener letras."
        },
        len: {
          args: [2, 255],
          msg: "El apellido debe contener al menos dos caracteres."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El email tiene que ser un correo válido."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "La contraseña debe tener al menos 6 caracteres."
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isInt: {
          msg: "El numero de teléfono sólo puede contener números."
        },
        len: {
          args: [10],
          msg: "El número de teléfono sólo puede contener 10 caracteres."
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "Tipo de usuario inválido."
        }
      }
    },
    resetLink: {
      type: DataTypes.STRING,
      allowNull: true,
      }
    }
 );

  user.associate = function (models) {
    // associations can be defined here
    user.hasMany(models.user_student, {
      as: 'student',
      foreignKey: 'user_id'
    }),
    user.hasMany(models.student_studies, {
      as: 'studies',
      foreignKey: 'user_id'
    }),
    user.hasMany(models.professor_experience, {
      as: 'experience',
      foreignKey: 'user_id'
    }),
    user.hasMany(models.class_comment, {
      as: 'comments',
      foreignKey: 'id_student'
    }),
    user.hasMany(models.classes, {
      as: 'user_class_asoc_prof',
      foreignKey: 'professor'
    }),
    user.hasMany(models.student_class, {
      as: 'student_classes',
      foreignKey: 'id_student'
    })

  };

  return user;
};