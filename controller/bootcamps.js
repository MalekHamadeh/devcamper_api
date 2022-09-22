const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");

//  @desc Get all bootcamps
//  @routes GET /api/v1/bootcamps
//  @access public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

//  @desc Get all bootcamps
//  @routes GET /api/v1/bootcamps/:id
//  @access public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      // return res.status(400).json({ sucess: false });
      return next(
        new ErrorResponse(`Bootcamp not Found with ID of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    // res.status(400).json({ sucess: false });
    next(
      new ErrorResponse(`Bootcamp not Found with ID of ${req.params.id}`, 404)
    );
  }
};

//  @desc Create new bootcamps
//  @routes POST /api/v1/bootcamps
//  @access private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ sucess: false });
  }
};

//  @desc Update bootcamp
//  @routes PUT /api/v1/bootcamps/:id
//  @access private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

//  @desc delete bootcamp
//  @routes DELETE /api/v1/bootcamps/:id
//  @access private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};
