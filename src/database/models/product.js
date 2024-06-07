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
      Product.belongsTo(models.Color, {
        as: "color",
        foreignKey: "colorId"
      });
      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId"
      });
      Product.belongsTo(models.Gender, {
        as: "gender",
        foreignKey: "genderId"
      });
      Product.belongsTo(models.Section,{
        as :"section",
        foreignKey : "sectionId"
      });
      Product.belongsTo(models.Size,{
        as :"size",
        foreignKey : "sizeId"
      });
      Product.belongsTo(models.Collection,{
        as :"collection",
        foreignKey : "collectionId"
      });
      Product.hasMany(models.Image, { foreignKey: 'productId', as: 'images' });
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
    sizeId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};