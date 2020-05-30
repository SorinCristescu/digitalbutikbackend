
// @desc Get all leeds
// @route GET /api/v1/leeds
// @access Private
exports.getLeeds = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Show all leeds',
        hello: req.hello
    });
};

// @desc Get single leeds
// @route GET /api/v1/leeds/:id
// @access Private
exports.getLeed = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Show leed with id ${req.params.id}`
    });
};

// @desc Create new leeds
// @route POST /api/v1/leeds
// @access Private
exports.createLeed = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Create new leed'
    });
};

// @desc Update  leed
// @route PUT  /api/v1/leeds/:id
// @access Private
exports.updateLeed = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Update leed with id ${req.params.id}`
    });
};

// @desc Delete  leed
// @route DELETE  /api/v1/leeds/:id
// @access Private
exports.deleteLeed = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Delete leed with id ${req.params.id}`
    });
}; 