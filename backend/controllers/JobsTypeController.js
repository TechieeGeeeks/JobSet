const JobType = require('../models/JobTypeModel');
const ErrorResponse = require("../utils/errorResponse");

// Create Job Category

exports.createJobType =async(req,res,next)=>{
    try {
        const jobTy = await JobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id,
            requirements: req.body.requirements,
            company: req.body.company,
            contact: req.body.contact,
            website:req.body.website
        });
        res.status(201).json({
            success:true,
            jobTy
        })
    } catch (error) {
        next(error);
    }
}