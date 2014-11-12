var express = require('express');
var router = express.Router();
var data = require('../data/catalog');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Online Catalog' });
});

/* GET albums page. */
router.get('/albums', function(req, res) {
	res.render('albums', {catalog: data.catalog});
});

/* GET album page. */
router.get('/album/:id', function(req, res) {
	var id = req.params.id;
	res.render('album', data.catalog[id]);
});

module.exports = router;
