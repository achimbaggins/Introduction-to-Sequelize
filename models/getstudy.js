'use strict';
module.exports = function(sequelize, DataTypes) {
  var getstudy = sequelize.define('getstudy', {
    subjectId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return getstudy;
};