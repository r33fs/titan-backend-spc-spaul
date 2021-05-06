var express = require('express');
var products = require('../products.json');

var router = express.Router({
    caseSensitive: true
});


router.route('/')
    .get(function (req, res) {

        return res.status(200).json({
            data: products
        });

    })
    .post(function (req, res) {

        let data = req.body;
        data.id = products.length + 1;
        products.push(data)
        return res.status(200).json({
            message: data
        })


    });

router.route('/:id')
    .put(function (req, res) {

        let id = req.params.id;
        let data = products.findIndex(x => x.id = id);
        products[data] = req.body;
        products[data].id = id;
        return res.status(200).json({
            message: data
        })


    })
    .delete(function (req, res) {

        let id = req.params.id;
        var indexVal = products.findIndex(x => x.id = id);        
        products.splice(indexVal, 1);
        return res.status(200).json({
            message: indexVal
        })


    })

module.exports = router;