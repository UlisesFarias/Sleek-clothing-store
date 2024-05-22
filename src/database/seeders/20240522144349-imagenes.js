'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Images', [
        {
          file: '1713342432_img_product_.jpg',
          path: '/public/images/Products/1713342432_img_product_.jpg',
          product_id: '1',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          file: '17123120871_img_product_.jpg',
          path: '/public/images/Products/17123120871_img_product_.jpg',
          product_id: '2',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          file: '17134543471_img_product_.jpg',
          path: '/public/images/Products/17134543471_img_product_.jpg',
          product_id: '3',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          file: '89910868871_img_product_.jpg',
          path: '/public/images/Products/89910868871_img_product_.jpg',
          product_id: '4',
          createdAt: new Date,
          updatedAt: new Date
        },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Images', null, {});
     
  }
};
