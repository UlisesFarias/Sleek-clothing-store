"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Colors",
      [
        {
          name: "Negro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blanco",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "gris",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Verde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", null, {});
  },
};
