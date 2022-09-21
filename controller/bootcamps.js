//  @desc Get all bootcamps
//  @routes GET /api/v1/bootcamps
//  @access public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: "Show All bootcamps" });
};

//  @desc Get all bootcamps
//  @routes GET /api/v1/bootcamps/:id
//  @access public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Display bootcamps ${req.params.id}` });
};

//  @desc Create new bootcamps
//  @routes POST /api/v1/bootcamps
//  @access private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: "Create New bootcamps" });
};

//  @desc Update bootcamp
//  @routes PUT /api/v1/bootcamps/:id
//  @access private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamps ${req.params.id}` });
};

//  @desc delete bootcamp
//  @routes DELETE /api/v1/bootcamps/:id
//  @access private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamps ${req.params.id}` });
};
