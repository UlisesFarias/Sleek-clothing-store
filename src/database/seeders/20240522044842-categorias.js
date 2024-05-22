"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Buzo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Campera",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Remera",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pantalones",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shorts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Accesorios",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
  
  
     await queryInterface.bulkDelete('Categories', null, {});
     
  },
};
