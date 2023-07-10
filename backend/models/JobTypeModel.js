const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const jobTypeSchema = new mongoose.Schema({
    jobTypeName: {
        type: String,
        trim: true,
        required: [true,'Job Type is Required'],
        maxlength: 40
    },
    user:{
        type: ObjectId,
        ref: "User",
        required:true
    },
    requirements: {
        type: String,
        trim: true,
        required: [true,'roleType is Required']
    },
    company: {
        type: String,
        trim: true,
        required: [true,'Company name is Required'],
        maxlength: 40
    },
    contact: {
        type: Number,
        trim: true,
        required: [true,'Contact is Required'],
        maxlength:10
    },
    website:{
        type: String,
        trim: true,
        required: [true,'Website is Required'],
        maxlength:30
    },

}, {timestamp:true});


module.exports = mongoose.model("JobType", jobTypeSchema);

