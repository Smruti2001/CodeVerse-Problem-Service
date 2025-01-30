const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    editorial: {
        type: String
    }
})


const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;