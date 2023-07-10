const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { createJobType } = require('../controllers/JobsTypeController');
const router = express.Router();

//Job Type Routes

// /api/type/create
router.post('/type/create', isAuthenticated, createJobType)

module.exports = router;