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
    

}, {timestamp:true});


module.exports = mongoose.model("JobType", jobTypeSchema);

