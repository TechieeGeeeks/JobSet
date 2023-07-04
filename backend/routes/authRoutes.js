const express = require('express');
const router = express.Router();
const {signup, signin,logout} = require('../controllers/authController')

//auth route Signup POST request=>   {/api/signup}
router.post('/signup',signup);

//auth route Signin POST Request=>   {/api/signin}
router.post('/signin',signin);

//auth route logout =>   {/api/logout}
router.get('/logout',logout);

module.exports = router;