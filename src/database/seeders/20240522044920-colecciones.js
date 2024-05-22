'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Collections', [
      {
        name: 'Invierno',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Otoño',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Primavera',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Verano',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.bulkDelete('Collections', null, {});
     
  }
};
