const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createJob, allJobs, singleJob, updateJob, deleteJob } = require('../controllers/jobsController');
const router = express.Router();

//Job Routes

// /api/job/create
router.post('/job/create', isAuthenticated,isAdmin, createJob);

// /api/jobs
router.get('/jobs',  allJobs);

// /api/job/:id
router.get('/job/:id',  singleJob);

// /api/job/update/:id
router.put('/job/update/:job_id',isAuthenticated,isAdmin,updateJob)

// /api/job/delete/:id
router.delete('/job/delete/:job_id',isAuthenticated,isAdmin,deleteJob)

module.exports = router;