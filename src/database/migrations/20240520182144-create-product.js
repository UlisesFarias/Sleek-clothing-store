'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stock: {
        type: Sequelize.STRING,
        allowNull: false
      },
      colorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :{
          model:{
            tableName : 'Colors'
          }
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :{
          model:{
            tableName : 'Categories'
          }
        }
      },
      genderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :{
          model:{
            tableName : 'Genders'
          }
        }
      },
      sectionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :{
          model:{
            tableName : 'Sections'
          }
        }
      },
      sizeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :{
          model:{
            tableName : 'Sizes'
          }
        }
      },
      collectionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :{
          model:{
            tableName : 'Collections'
          }
        }
      },
      imageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};