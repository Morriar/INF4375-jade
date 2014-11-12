var express = require('express');
var router = express.Router();
var data = require('../data/catalog');

/* GET albums page. */
router.get('/', function(req, res) {
  res.render('xml_albums', {catalog: data.catalog});
});

/* GET album page. */
router.get('/:id', function(req, res) {
	var id = req.params.id;
	var album = data.catalog[id];
	album.id = id
	res.render('xml_album', {withDoctype: true, album: album});
});

module.exports = router;
