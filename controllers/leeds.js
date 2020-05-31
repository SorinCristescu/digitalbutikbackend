const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async'); 
const Leed = require('../models/leed');


// @desc Get all leeds
// @route GET /api/v1/leeds
// @access Private
exports.getLeeds = asyncHandler(async (req, res, next) => {
        const leeds = await Leed.find();

        res.status(200).json({
            success: true,
            count: leeds.length,
            data: leeds
        });
});

// @desc Get single leeds
// @route GET /api/v1/leeds/:id
// @access Private
exports.getLeed = asyncHandler(async (req, res, next) => {
        const leed = await Leed.findById(req.params.id);

        if(!leed) {
            return next(new ErrorResponse(`Leed not found with id of ${req.params.id}`, 400));
        };

        res.status(200).json({
            success: true,
            data: leed
        });
});

// @desc Create new leeds
// @route POST /api/v1/leeds
// @access Private
exports.createLeed = asyncHandler(async (req, res, next) => {
        const leed = await Leed.create(req.body);
    
        res.status(201).json({
            success: true,
            data: leed
        });
});

// @desc Update  leed
// @route PUT  /api/v1/leeds/:id
// @access Private
exports.updateLeed = asyncHandler(async (req, res, next) => {
        const leed = await Leed.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!leed) {
            return next(new ErrorResponse(`Leed not found with id of ${req.params.id}`, 400));
        };

        res.status(200).json({
            success: true,
            data: leed
        });
});

// @desc Delete  leed
// @route DELETE  /api/v1/leeds/:id
// @access Private
exports.deleteLeed = asyncHandler(async (req, res, next) => {
        const leed = await Leed.findByIdAndDelete(req.params.id);

        if(!leed) {
            return next(new ErrorResponse(`Leed not found with id of ${req.params.id}`, 400));
        };
        res.status(200).json({
            success: true,
            data: {}
        });
}); 