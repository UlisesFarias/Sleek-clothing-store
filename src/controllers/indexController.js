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
    }
}