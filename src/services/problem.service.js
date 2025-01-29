const { markdownSanitizer } = require("../utils");

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async addProblem(problemData) {
        // Sanitize the markdown for description
        problemData.description = markdownSanitizer(problemData.description);

        const problem = await this.problemRepository.addProblem(problemData);

        return problem;
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(id) {
        const problem = await this.problemRepository.getProblem(id);
        return problem;
    }

    async deleteProblem(id) {
        const deletedProblem = await this.problemRepository.deleteProblem(id);
        return deletedProblem;
    }

}

module.exports = ProblemService;