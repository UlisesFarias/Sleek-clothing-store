'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Products', [
      {
        name:"Redd",
        price:34653.81,
        description:"Esta prenda es una pieza de estilo clásico con un toque moderno. Fabricada con materiales de alta calidad",
        stock:400,
        color_id:1,
        category_id:1,
        gender_id:1,
        section_id:1,
        size_id:1,
        image_id:1,
        createdAt: new Date,
        updatedAt: new Date
    },
    {
      name:"Darby",
        price:35082.17,
        description:"como cierres de cremallera y bolsillos para mayor comodidad. Disponible en varios colores",
        stock:493,
        color_id:2,
        category_id:2,
        gender_id:2,
        section_id:2,
        size_id:2,
        image_id:1,
        createdAt: new Date,
        updatedAt: new Date
    },
    {
      name:"Lionello",
        price:67689.67,
        description:"esta prenda es una opción perfecta para aquellos que buscan estilo y calidad en su vestuario. Ideal para añadir un toque de elegancia a cualquier conjunto y resistente para soportar el uso diario.",
        stock:351,
        color_id:3,
        category_id:3,
        gender_id:3,
        section_id:3,
        size_id:3,
        image_id:1,
        createdAt: new Date,
        updatedAt: new Date
    },
    {
      name:"Bettine",
        price:65179.42,
        description:"Esta prenda es una pieza de estilo clásico con un toque moderno. Fabricada con materiales de alta calidad",
        stock:509,
        color_id:4,
        category_id:4,
        gender_id:4,
        section_id:4,
        size_id:4,
        image_id:1,
        createdAt: new Date,
        updatedAt: new Date
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Products', null, {});
     
  }
};
