'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return students;
};