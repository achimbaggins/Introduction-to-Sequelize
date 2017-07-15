'use strict';
module.exports = function(sequelize, DataTypes) {
  var subject = sequelize.define('subject', {
    subject_name: DataTypes.STRING
  });

  subject.associate = (models) => {
    subject.hasMany(models.teacher);
    subject.associate = (models) => {
      subject.belongsToMany(models.students, {
        through: 'getstudy'
      });
    }

  }
  return subject;
};
