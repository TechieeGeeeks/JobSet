const ErrorResponse = require("../utils/errorResponse");
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const JWT_SECRET = process.env.JWT;

// Check if user is authnticated
exports.isAuthenticated = async (req,res,next)=>{
    const {token} = req.cookies;
    // Making sure that token Exists
    if(!token){
        return next(new ErrorResponse("Not Authorized to Access", 401));
    }
    try {
        // Verify Token
        const decoded = jwt.verify(token,JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return next(new ErrorResponse("Not Authorized to Access", 401));
    }
}

// MiddleWare Admin
exports.isAdmin=(req,res,next)=>{
    if(req.user.role === 0){
        return next(new ErrorResponse("Not Authorized to Access", 401));
    }
    next();
}