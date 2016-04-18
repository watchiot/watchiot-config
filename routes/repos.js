var express = require('express');
var router = express.Router();
var repos = require('../repos/repos.json');

router.get('/', function(req, res, next) {
  var lst_repos = {};
  for (var index in repos.repos) {
    var repo_folder = repos.repos[index];
    var repo = require('../repos/' + repo_folder + '/repo.json');
    lst_repos[repo_folder] = repo.repo;
  }

  res.json(lst_repos);
});

module.exports = router;
