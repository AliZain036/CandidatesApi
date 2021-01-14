'use strict';

const mongoose = require('mongoose');
const Candidate = mongoose.model('Candidate');

exports.list_all_candidates = (req, res) => {
    Candidate.find({}, function (err, candidate) {
        if (err)
            res.send(err);
        res.status(200).json(candidate);
    })
}

exports.create_new_candidate = (req, res) => {
    const newCandidate = new Candidate(req.body);
    newCandidate.save(function (err, candidate) {
        if (err) 
            res.send(err);
        res.json(candidate)
    })
}

exports.get_candidate = (req, res) => {
    Candidate.findById(req.params.candidateId, function (err, candidate) {
        if(err)
            res.send(err);
        res.json(candidate);
    })
}

exports.update_candidate = (req, res) => {
    Candidate.findOneAndUpdate({_id: req.params.candidateId}, req.body, {new: true}, function (err, candidate) {
        if(err)
            res.send(err);
        res.json(candidate);
    });
}

exports.delete_candidate = (req, res) => {
    Candidate.deleteOne({_id: req.params.candidateId}, function (err, candidate) {
        if(err)
            res.send(err);
        res.json({messae: 'Candidate deleted successfully'});
    })
}