const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console for the developer
  console.log(err.stack.red);

  // Mongoose Bad ObjectID
  if (err.name === "CastError") {
    const message = `Resource not Found with ID of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose Duplicate Key
  if (err.code === 11000) {
    const message = "Duplicate field Value Entered";
    error = new ErrorResponse(message, 400);
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorResponse(message, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ sucess: false, error: error.message || "Server Error" });
};

module.exports = errorHandler;
