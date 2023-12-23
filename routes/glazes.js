const express = require('express');
const router = express.Router();
const glazesCtrl = require('../controllers/glazes');
	
// GET /movies/new
router.get('/', glazesCtrl.index)
router.get('/new', glazesCtrl.new);
router.get('/:id', glazesCtrl.show);
router.post('/', glazesCtrl.create)

	
module.exports = router;
