const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { createJob, allJobs } = require('../controllers/jobsController');
const router = express.Router();

//Job Routes

// /api/job/create
router.post('/job/create', isAuthenticated, createJob);

// /api/jobs
router.get('/jobs',  allJobs);

module.exports = router;