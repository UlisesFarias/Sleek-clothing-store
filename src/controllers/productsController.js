const db = require("../database/models");

module.exports = {
  add: (req, res) => {
    const categories = db.Category.findAll({
      order: ["name"],
    });
    const collections = db.Collection.findAll({
      order: ["name"],
    });
    const colors = db.Color.findAll({
      order: ["name"],
    });
    const sizes = db.Size.findAll({
      order: ["name"],
    });
    Promise.all([categories, collections, colors, sizes])

      .then(([categories, collections, colors, sizes]) => {
        return res.render("products/product-add", {
          categories,
          collections,
          colors,
          sizes,
        });
      })

      .catch((error) => console.log(error));
  },

  create: (req, res) => {
    
    const {name, price, description, sizes,categories,collections,colors} = req.body;
    const product = {
        name: name.trim(),
        price: price.trim(),
        description,
        sizes,
        categories,
        collections,
        colors,
    };
    db.Product.create(product)
      .then((newProduct) => {
        console.log(newProduct);
        return res.redirect("/admin");
      })

      .catch((error) => console.log(error));
  },
};
