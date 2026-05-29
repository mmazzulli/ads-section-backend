const express = require('express')
const router = express.Router()
const adsController = require('../controllers/adsController')
router.post('/ads', adsController.create)
router.get('/ads', adsController.getAll)
router.get('/ads/:id', adsController.getById)
router.put('/ads/:id', adsController.update)
router.delete('/ads/:id', adsController.delete)
module.exports = router