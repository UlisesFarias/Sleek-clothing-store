'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Genders', [
      {
        name: "hombre",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "mujer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "unisex",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Genders', null, {});
     
  }
};
