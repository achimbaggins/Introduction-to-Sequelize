'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
        msg: "Email Format Incorrect!!!"
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return students;
};
