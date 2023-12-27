const express = require('express');
const router = express.Router();
const glazesCtrl = require('../controllers/glazes');
const ensureLoggedIn = require('../config/ensureLoggedIn')
	
// GET /movies/new
router.get('/', glazesCtrl.index)
router.get('/new', ensureLoggedIn, glazesCtrl.new);
router.get('/:id', glazesCtrl.show);
router.post('/', ensureLoggedIn, glazesCtrl.create)

	
module.exports = router;
