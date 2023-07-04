const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // For Cast Errors
  if (err.name === "CastError") {
    const message = `Resource Not Found ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // For Mongoose Duplicate Values
  if (err.code === 11000) {
    const message = "Duplicate Field Value Entered";
    error = new ErrorResponse(message, 400);
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(val => ' ' + val.message);
    error = new ErrorResponse(message, 404);
  }

  res.status(error.codeStatus || 500).json({
    success: false,
    error: error.message || "server error",
  });
};

module.exports = errorHandler;
