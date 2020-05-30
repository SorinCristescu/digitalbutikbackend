const express = require('express');
const router = express.Router();
const {
    getLeeds,
    getLeed,
    createLeed,
    updateLeed,
    deleteLeed
} = require('../controllers/leeds');

router
    .route('/')
    .get(getLeeds)
    .post(createLeed);  

router
    .route('/:id')
    .get(getLeed)
    .put(updateLeed)
    .delete(deleteLeed);

module.exports = router;