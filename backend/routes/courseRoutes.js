const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createCourse, allCourses, deleteCourse,editCourse} = require('../controllers/courseControllers');
const router = express.Router();

//Job Routes

// /api/course/create
router.post('/course/create', isAuthenticated,isAdmin, createCourse);

// /api/courses
router.get('/courses',  allCourses);

// /api/deleteCourse
router.delete('/course/delete/:course_id', isAuthenticated,isAdmin,deleteCourse);

// /api/editCourse
router.put('/course/edit/:course_id', isAuthenticated,isAdmin,editCourse);


module.exports = router;