const express = require('express');
const { createItem, updateItem, deleteItem } = require('../controllers/itemController');
const router = express.Router();

router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
