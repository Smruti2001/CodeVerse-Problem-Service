function pingProblemController(req, res) {
    return res.json({messgae: 'problem controller is alive'})
}

function addProblem(req, res) {
    res.status(501).json({message: 'Not implemented'});
}

function getProblem(req, res) {
    res.status(501).json({message: 'Not implemented'});
}

function getProblems(req, res) {
    res.status(501).json({message: 'Not implemented'});
}

function deleteProblem(req, res) {
    res.status(501).json({message: 'Not implemented'});
}

function updateProblem(req, res) {
    res.status(501).json({message: 'Not implemented'});
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}