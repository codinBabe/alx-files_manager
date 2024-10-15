#!usr/bin/node

const { Router } = require('express');
const appController = require('../controllers/AppControllers');

const router = Router();

router.get('/status', appController.getStatus);
router.get('/stats', appController.getStats);

module.exports = router;
