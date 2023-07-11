const Job = require('../models/jobModel');
const ErrorResponse = require("../utils/errorResponse");

// Create Job Category

exports.createJob =async(req,res,next)=>{
    try {
        const job = await Job.create({  
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            available: req.body.available,
            company: req.body.company,
            contact: req.body.contact,
            website: req.body.website,
            user: req.user.id,
            jobType: req.body.jobType,
        });
        res.status(201).json({
            success:true,
            job
        })
    } catch (error) {
        next(error);
    }
};

// all jobs category
exports.allJobs =async(req,res,next)=>{
    try {
        const job = await Job.find();
        res.status(200).json({
            success:true,
            job
        })
    } catch (error) {
        next(error);
    }
}

// Single Job
exports.singleJob =async(req,res,next)=>{
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success:true,
            job
        })
    } catch (error) {
        next(error);
    }
}

// Update Job
exports.updateJob =async(req,res,next)=>{
    try {
        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body,{new:true}).populate('jobType', 'jobTypeName').populate('user', 'firstName middleName lastName');
        res.status(200).json({
            success:true,
            job
        })
    } catch (error) {
        next(error);
    }
}