const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class NotImplemented extends BaseError {
    constructor(functionName) {
        super('Not Implemented', StatusCodes.NOT_IMPLEMENTED, `${functionName} not implemented`, {});
    }
}

module.exports = NotImplemented;