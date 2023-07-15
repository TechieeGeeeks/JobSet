const express = require('express');
const router = express.Router();
const {allUsers, singleUser, editUser, deleteUser, allAdmins, createuserJobsHistory} = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

//User Routes

//auth route for admin to get all Users Info =>   {/api/allusers}
router.get('/allusers',isAuthenticated,isAdmin, allUsers);

//auth route for particular User =>   {/api/allusers}
router.get('/user/:id',isAuthenticated, singleUser);

//auth route for editing User =>   {/api/user/edit/:id}
router.put('/user/edit/:id',isAuthenticated, editUser);

//auth route for deleting User =>   {/api/user/delete/:id}
router.delete('/user/delete/:id',isAuthenticated, isAdmin, deleteUser);

//auth route for admin to get all Users Info =>   {/api/allusers}
router.get('/alladmins',isAuthenticated,isAdmin, allAdmins);

//auth route for applying job by User =>   {/api/user//jobhistory}
router.post('/user/jobhistory',isAuthenticated, /*Do We want our admin to apply for jobs 😅 if not uncomment this ``` !isAdmin ```*/createuserJobsHistory);

module.exports = router;