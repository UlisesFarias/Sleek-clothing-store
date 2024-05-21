'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.STRING,
    colorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER,
    sectionId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};