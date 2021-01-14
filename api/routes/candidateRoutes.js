'use strict';
module.exports = function (app) {
  const candidatesList = require('../controllers/candidateController');
  const { list_all_candidates } = require('../controllers/candidateController');

  console.log({list_all_candidates: candidatesList.list_all_candidates});

  // candidateList Routes
  app
    .route('/candidates')
    .get(candidatesList.list_all_candidates)
    .post(candidatesList.create_new_candidate);

  app
    .route('/candidates/:candidateId')
    .get(candidatesList.get_candidate)
    .put(candidatesList.update_candidate)
    .delete(candidatesList.delete_candidate);
};
