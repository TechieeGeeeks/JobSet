const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: [true,'Title is Required'],
        maxlength: 40
    },
    description:{
        type: String,
        trim: true,
        required: [true,'Description is Required']
    },
    duration:{
        type: String,
        trim: true,
        required: [true,'Duration is Required']
    },
    logo:{
        type: String,
        default:"",
        required: [true,'Logo is Required']
    },
    company:{
        type: String,
        trim: true,
        required: [true,'Company name is Required'],
        maxlength: 40
    }
},{timestamp:true});

module.exports = mongoose.model("Course", courseSchema);