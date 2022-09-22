const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to DB
connectDB();

//route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Body Parser
app.use(express.json());

//dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler); // This should be after Mounted Router to work

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`.red.underline);
  //close server and exit process
  server.close(() => process.exit(1));
});
