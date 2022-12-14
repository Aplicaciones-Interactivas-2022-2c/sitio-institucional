'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class class_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      class_comment.belongsTo(models.classes,{
        as: 'class',
        foreignKey: 'id_class'
      }),
      class_comment.belongsTo(models.user,{
        as: 'student',
        foreignKey: 'id_student'
      })
    }
  }
  class_comment.init({
    id_class: DataTypes.INTEGER,
    id_student: DataTypes.STRING,
    content: DataTypes.STRING,
    stars: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'class_comment',
  });
  return class_comment;
};