const express = require('express')
const router = express.Router()
const multer = require('multer')
const { detailProduct } = require('../controllers/indexController');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,(path.join(__dirname,'../../','/public/images/Products')))
    },
    filename : function(req, file, cb){
        cb(null, `${Date.now()}_img_product_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage:storage})

router
.get('/detalle/:id',detailProduct)


module.exports = router;