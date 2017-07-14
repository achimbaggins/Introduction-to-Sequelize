'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('getstudies', [{
      subjectId: 1,
      studentId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 4,
      studentId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 1,
      studentId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 5,
      studentId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 5,
      studentId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 4,
      studentId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 5,
      studentId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 7,
      studentId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 7,
      studentId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 4,
      studentId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 2,
      studentId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 7,
      studentId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      subjectId: 4,
      studentId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
