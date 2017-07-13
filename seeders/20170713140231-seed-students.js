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

    return queryInterface.bulkInsert('students', [{
      firstname: 'Budi',
      lastname: 'Wijaya',
      email: 'budi@budiwijaya.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Budi2',
      lastname: 'Wijaya2',
      email: '2budi@budiwijaya.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Budi3',
      lastname: 'Wijaya3',
      email: '3budi@budiwijaya.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Budi4',
      lastname: 'Wijaya4',
      email: '4budi@budiwijaya.com',
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
