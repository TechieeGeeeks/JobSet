const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT;
const {ObjectId} = mongoose.Schema;


const jobsHistorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    salary: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true
    },
    interviewDate: {
        type: Date,
        trim: true
    },
    company: {
        type: String,
        trim: true,
    },
    contact: {
        type: Number,
        trim: true,
    },
    website:{
        type: String,
        trim: true,
    },
    applicationStatus:{
        type: String,
        enum: ['pending', 'accepetd', 'rejected'],
        default:'pending'
    },
    user:{
        type: ObjectId,
        ref: "User",
        required:true
    }
}, {timestamp:true});

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true,'First Name is Required'],
        maxlength: 20
    },
    middleName: {
        type: String,
        trim: true,
        required: [true,'First Name is Required'],
        maxlength: 35
    },
    lastName: {
        type: String,
        trim: true,
        required: [true,'Middle Name is Required'],
        maxlength: 20
    },
    email:{
        type:String,
        trim: true,
        required: [true,'E-mail is Required'],
        unique:true,
        maxlength: 30,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minlength: [6, 'password must have at least (6) caracters'],
    },
    role: { // User = 0, Admin =1 
        type: Number,
        default: 0
    },
    gender:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    contact:{
        type:Number,
        required: true,
        unique: true,
        maxlength:10
    },
    jobsHistory: [jobsHistorySchema],
}, {timestamp:true});

// If user changes the password then Encrypting the password before storing it on DB
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Return a JWT Token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this.id},jwtSecret, {expiresIn:3600})
}

module.exports = mongoose.model("User", userSchema);