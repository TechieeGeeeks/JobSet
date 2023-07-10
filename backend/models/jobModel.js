const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true,'Title is Required'],
        maxlength: 40
    },
    description: {
        type: String,
        trim: true,
        required: [true,'Description is Required']
    },
    salary: {
        type: String,
        trim: true,
        required: [true,'Salary is Required']
    },
    location: {
        type: String,
        trim: true,
        required: [true,'location is Required']
    },
    available: {
        type: Boolean,
        default: true
    },
    user:{
        type: ObjectId,
        ref: "User",
        required:true
    },
    jobType:{
        type: ObjectId,
        ref: "JobType",
        required:true
    }
}, {timestamp:true});


module.exports = mongoose.model("Job", jobSchema);