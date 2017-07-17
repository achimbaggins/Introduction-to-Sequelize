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
    return queryInterface.bulkInsert('users', [{
      username: 'admin',
      password: 'admin',
      role: 'administrator',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'guru',
      password: 'guru',
      role: 'guru',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'siswa',
      password: 'siswa',
      role: 'siswa',
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
