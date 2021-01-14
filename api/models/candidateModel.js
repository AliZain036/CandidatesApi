'use strict';
const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Enter candidate name'
    },
    email: {
        type: String,
        required: 'Enter candidate email'
    },
    experience: {
        type: Number,
        required: 'Enter experience in years'
    }
})

const Schema = mongoose.model('Candidate', candidateSchema)
module.exports = Schema