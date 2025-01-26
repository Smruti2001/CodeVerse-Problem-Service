const BaseError = require("../errors/base.error");
const { StatusCodes } = require('http-status-codes');

function errorHandler(err, req, res, next) {
    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: 'false',
            message: err.message,
            details: err.details,
            data: {} // As this is an error no data will be returned
        })
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: 'false',
        message: 'Something went wrong!',
        details: err,
        data: {} // As this is an error no data will be returned
    })
}

module.exports = errorHandler;