'use strict';
module.exports = function(sequelize, DataTypes) {
  var teacher = sequelize.define('teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    subjectId: DataTypes.INTEGER,
    email: DataTypes.STRING
  });
  teacher.associate = (models) => {
    teacher.belongsTo(models.subject);
  }
  return teacher;
};
