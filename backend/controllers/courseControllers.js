const Course = require("../models/courseModel");

// Create Course
exports.createCourse = async(req, res, next)=>{
    try {
        const course = await Course.create({
            title: req.body.title,
            description: req.body.description,
            duration: req.body.duration,
            logo: req.body.logo,
            company: req.body.company
        });
        res.status(201).json({
            success: true,
            course
        });
    } catch (error) {
        next(error);
    }
};

// All Courses
exports.allCourses = async(req, res, next)=>{
  try {
    const courses = await Course.find();
    res.status(200).json({
        success: true,
        courses
    });
    next();
  } catch (error) {
    return next(error);
  }
};


// Delete Course
exports.deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndRemove(req.params.course_id)
    res.status(200).json({
      success: true,
      message:"Course Has Been Deleted",
    });
  } catch (error) {
    next(error);
  }
};

// Edit Course
exports.editCourse = async(req,res,next)=>{
  try {
    const course = await Course.findByIdAndUpdate(req.params.course_id, req.body,{new:true});
    res.status(200).json({
      success:true,
      course
    })
    next();
  } catch (error) {
    return next(error);
  }
}

