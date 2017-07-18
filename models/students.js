'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
  });


  students.associate = (models) => {
    students.belongsToMany(models.subject, {
      through: 'getstudy'
    })
  }

  return students;
};
