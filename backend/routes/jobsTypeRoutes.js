const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createJobType, allJobsType } = require('../controllers/JobsTypeController');
const router = express.Router();

//Job Type Routes

// /api/type/create
router.post('/type/create', isAuthenticated,isAdmin, createJobType);

// /api/type/create
router.get('/type/jobs',  allJobsType);

module.exports = router;