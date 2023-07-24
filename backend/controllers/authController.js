const User = require('../models/userModel')
const ErrorResponse = require("../utils/errorResponse");

exports.signup= async(req,res,next)=>{
    const {email} = req.body;
    const userExist = await User.findOne({email:email});
    if(userExist){
        return next(new ErrorResponse("Email Already Exists", 400));
    }
    try {
        const user = User.create(req.body);
        res.status(201).json({success:true, user:user})
    }catch (error) {
        next(error);
    }
}; 

exports.signin= async(req,res,next)=>{
    try {
        const {email,password} = req.body;
        // Validation
        if(!email){
            return next(new ErrorResponse("InValid Credentials ", 403));
        }if(!password){
            return next(new ErrorResponse("InValid Credentials ", 403));
        }

        // Check User Email
        const user = await User.findOne({email});
        if(!user){
            return next(new ErrorResponse("InValid Credentials ", 400));
        }

        // Check Password
        const isMatched = await user.comparePassword(password);
        if(!isMatched){
            return next(new ErrorResponse("InValid Credentials ", 400));
        }
        sendTokenResponse(user,200,res);
    } catch (error) {
        next(error);
    }
};

const sendTokenResponse = async(user,codeStatus,res)=>{
    const token = await user.getJwtToken();
    res.status(codeStatus).cookie('token',token,{maxAge: 60*60*1000}).json({success:true,token,user, role:user.role });
}

// Log Out 
exports.logout=(req,res,next)=>{
    res.clearCookie('token');
    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
}

// user profile
exports.userProfile=async(req,res,next)=>{
    try {
        const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({
        success:true,
        user
    });
    } catch (error) {
        next(error);
    }
    
}
