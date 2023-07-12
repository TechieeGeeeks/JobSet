const Job = require("../models/jobModel");
const JobType = require("../models/JobTypeModel");
const ErrorResponse = require("../utils/errorResponse");

// Create Job Category

exports.createJob = async (req, res, next) => {
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
      success: true,
      job,
    });
  } catch (error) {
    next(error);
  }
};

// all jobs category
exports.allJobs = async (req, res, next) => {
  try {
    const keyword = req.query.keyword
      ? {
          title: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const cat = req.query.cat || null;
    const location = req.query.location || null;

    const jobTypeFilter = cat ? { jobType: cat } : {};
    const locationFilter = location ? { location: location } : {};

    let filter = { ...keyword, ...jobTypeFilter, ...locationFilter };

    if (!cat && !location) {
      filter = {}; // Retrieve all jobs if cat and location are not provided
    }

    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;

    const count = await Job.countDocuments(filter);

    const jobs = await Job.find(filter)
      .sort({createdAt:-1})
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    res.status(200).json({
      success: true,
      jobs,
      pages: Math.ceil(count / pageSize),
      page,
      count,
      pageSize,
    });
  } catch (error) {
    next(error);
  }
};

// Single Job
exports.singleJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    next(error);
  }
};

// Update Job
exports.updateJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, {
      new: true,
    })
      .populate("jobType", "jobTypeName")
      .populate("user", "firstName middleName lastName");
    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Job
exports.deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndRemove(req.params.job_id)
    res.status(200).json({
      success: true,
      message:"Job Has Been Deleted",
    });
  } catch (error) {
    next(error);
  }
};
