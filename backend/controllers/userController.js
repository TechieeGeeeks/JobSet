const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

//Load All Users
exports.allUsers = async (req, res, next) => {
  //Enable Pagination
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const count = await User.find({}).estimatedDocumentCount();

  try {
    const users = await User.find()
      .sort({ createdAt: -1 })
      .select("-password")
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    res.status(200).json({
      success: true,
      users,
      page,
      pages: Math.ceil(count / pageSize),
      count,
    });
    next();
  } catch (error) {
    return next(error);
  }
};

// Show Single User
exports.singleUser = async(req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      success:true,
      user
    })
    next();
  } catch (error) {
    return next(error);
  }
}

// Edit User
exports.editUser = async(req,res,next)=>{
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.status(200).json({
      success:true,
      user
    })
    next();
  } catch (error) {
    return next(error);
  }
}

// Delete User
exports.deleteUser = async(req,res,next)=>{
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success:true,
      message:"User Deleted SuccessFully"
    })
    next();
  } catch (error) {
    return next(error);
  }
}

// export all admins
exports.allAdmins = async(req,res,next)=>{
  try{
    const admins = await User.find({role:1})
    .select("-password")
    res.status(200).json({
      success: true,
      admins,
    });
    next();
  }catch (error) {
    return next(error);
  }
},

// jobs History
exports.createuserJobsHistory = async(req,res,next)=>{
  const {title, description, salary, location} = req.body;

  try {
    const currentUser = await User.findOne({_id: req.user._id});
    if(!currentUser){
      return next(ErrorResponse("You Must Log In", 401))
    }else{
      const addJobHistory = {
        title, 
        description, 
        salary, 
        location,
        user: req.user._id
      }
      currentUser.jobsHistory.push(addJobHistory);
      await currentUser.save();
    }
    res.status(200).json({
      success:true,
      currentUser
    })
    next();
  } catch (error) {
    return next(error);
  }
}