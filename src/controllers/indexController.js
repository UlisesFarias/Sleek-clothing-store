const { Model } = require('sequelize')
const db = require ('../database/models')

module.exports = {
    index: (req, res) => {
		const destacado = db.Product.findAll({
			where: {sectionId: 1},
            include: [{
                model: db.Image,
                as: 'images'
            }] 
           
		})
		const oferta = db.Product.findAll({
			where: {sectionId: 2},
             include: [{
                model: db.Image,
                as: 'images'
            }] 
		})

		Promise.all([oferta, destacado])
			.then(([oferta, destacado]) => {
				return res.render('index', {
					oferta,
					destacado,
				})
            })
			.catch(error=>console.log(error))
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