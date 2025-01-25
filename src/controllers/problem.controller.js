const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');

function pingProblemController(req, res) {
    return res.json({ messgae: 'problem controller is alive' })
}

function addProblem(req, res, next) {
    try {
        throw new NotImplemented(`addProblem`);
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not implemented' });
}

function getProblems(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not implemented' });
}

function deleteProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not implemented' });
}

function updateProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not implemented' });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}