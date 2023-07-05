const express = require('express');
const router = express.Router();
const {signup, signin,logout, userProfile} = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');

//auth route Signup POST request=>   {/api/signup}
router.post('/signup',signup);

//auth route Signin POST Request=>   {/api/signin}
router.post('/signin',signin);

//auth route logout =>   {/api/logout}
router.get('/logout',logout);

//auth route User Info =>   {/api/me}
router.get('/me',isAuthenticated, userProfile);


module.exports = router;