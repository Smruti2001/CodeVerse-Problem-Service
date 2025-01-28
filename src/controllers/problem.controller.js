const { StatusCodes } = require('http-status-codes');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({ messgae: 'problem controller is alive' })
}

async function addProblem(req, res, next) {
    try {
        const newProblem = await problemService.addProblem(req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully added a new problem',
            error: {},
            data: newProblem
        })
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        throw new NotImplemented('getProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        throw new NotImplemented('getProblems');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        throw new NotImplemented('deleteProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        throw new NotImplemented('updateProblem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}