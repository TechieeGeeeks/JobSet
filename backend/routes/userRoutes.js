const express = require('express');
const router = express.Router();
const {allUsers, singleUser, editUser, deleteUser} = require('../controllers/userController');
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

module.exports = router;