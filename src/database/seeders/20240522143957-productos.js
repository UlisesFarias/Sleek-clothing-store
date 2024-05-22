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
        colorId:1,
        categoryId:1,
        genderId:1,
        sectionId:1,
        sizeId:1,
        imageId:1,
        collectionId:1,
        createdAt: new Date,
        updatedAt: new Date
    },
    {
      name:"Darby",
        price:35082.17,
        description:"como cierres de cremallera y bolsillos para mayor comodidad. Disponible en varios colores",
        stock:493,
        colorId:2,
        categoryId:2,
        genderId:2,
        sectionId:2,
        sizeId:2,
        imageId:1,
        collectionId:1,
        createdAt: new Date,
        updatedAt: new Date
    },
    {
      name:"Lionello",
        price:67689.67,
        description:"esta prenda es una opción perfecta para aquellos que buscan estilo y calidad en su vestuario. Ideal para añadir un toque de elegancia a cualquier conjunto y resistente para soportar el uso diario.",
        stock:351,
        colorId:3,
        categoryId:3,
        genderId:3,
        sectionId:3,
        sizeId:3,
        imageId:1,
        collectionId:1,
        createdAt: new Date,
        updatedAt: new Date
    },
    {
      name:"Bettine",
        price:65179.42,
        description:"Esta prenda es una pieza de estilo clásico con un toque moderno. Fabricada con materiales de alta calidad",
        stock:509,
        colorId:4,
        categoryId:4,
        genderId:4,
        sectionId:4,
        sizeId:4,
        imageId:1,
        collectionId:1,
        createdAt: new Date,
        updatedAt: new Date
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Products', null, {});
     
  }
};
