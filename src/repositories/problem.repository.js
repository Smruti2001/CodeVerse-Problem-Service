const { Problem } = require('../models');
const NotFound = require('../errors/notFound.error');
const logger = require('../config/logger.config');
class ProblemRepository {

    async addProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                codeStubs: problemData.codeStubs,
                testCases: (problemData.testCases) ? problemData.testCases : []
            });

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if (!problem) {
                throw new NotFound('problem', id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if (!deletedProblem) {
                logger.error(`Problem.repository: Problem with id: ${id} not found in the db`)
                throw new NotFound('problem', id);
            }
            return deletedProblem;
        } catch (error) {
            console.log(error);
            logger.error(error);
            throw error;
        }
    }

    async updateProblem(id, problemData) {
        try {
            const updateObject = {};

            if (problemData.title) {
                updateObject.title = problemData.title
            }

            if (problemData.description) {
                updateObject.description = problemData.description
            }

            if (problemData.testCases) {
                updateObject.testCases = problemData.testCases
            }

            if(problemData.codeStubs) {
                updateObject.codeStubs = problemData.codeStubs
            }

            const updatedProblem = await Problem.findOneAndUpdate({ _id: id }, updateObject, { new: true });

            if (!updatedProblem) {
                throw new NotFound('problem', id);
            }

            return updatedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}


module.exports = ProblemRepository;