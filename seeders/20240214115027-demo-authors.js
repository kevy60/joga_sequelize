'use strict';

const { Sequelize } = require("sequelize");

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Authors', [{
        id: '1',
        name: "Asley Galvin",
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        id: '2',
        name: "Patrick Beach",
        createdAt: new Date(),
        updatedAt: new Date()
      }]),

      queryInterface.bulkInsert('Authors', [{
        id: '3',
        name: "MacKenzie Miller",
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },


  down: (queueInterface, Sequelize) => {
    return queueInterface.bulkDelete('Authors', null, {});
  }
};

