const { Model } = require('sequelize')
const db = require ('../database/models')

module.exports = {
    index : (req,res) => {
        db.Product.findAll({
            include : ['category']
        })
        .then(products =>{
            return res.render('index',{
                products
            })
        })
        .catch(error => console.log(error))
    },
    detailProduct:(req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{
                model: db.Image,
                as: 'images'
            }]
        })
        .then(function(producto){
            const imagenes = producto.images.map(image => image.file);
            res.render('products/detailProduct', { 
                title: 'Detalles', 
                producto, 
                imagenes,
            });
        })
        .catch(err => console.log(err));
    }
}