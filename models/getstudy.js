'use strict';
module.exports = function(sequelize, DataTypes) {
  var getstudy = sequelize.define('getstudy', {
    subjectId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  });

  getstudy.associate = (models) => {
    getstudy.belongsTo(models.students);
    getstudy.belongsTo(models.subject)
  }
  return getstudy;
};
