var express = require('express');
var router = express.Router();
var repos = require('../repos/repos.json');
var path = require('path');
var fs = require('fs');

router.get('/', function(req, res, next) {
  var lst_repos = {};
  for (var index in repos.repos) {
    var repo_folder = repos.repos[index];
    var repo = require('../repos/' + repo_folder + '/repo.json');
    lst_repos[repo_folder] = repo.repo;
  }

  res.json(lst_repos);
});

/* router for config.yaml */
for (var index in repos.repos) {
  var repo_folder = repos.repos[index];
  router.get('/' + repo_folder + '/config.yaml', function (req, res, next) {
    res.send(req.url);
  });
}

/* router for readme.md */
for (var index in repos.repos) {
  var repo_folder = repos.repos[index];
  router.get('/' + repo_folder + '/readme.md', function (req, res, next) {
    res.send(req.url);
  });
}

 /* router for svg */
for (var index in repos.repos) {
  var repo_folder = repos.repos[index];
  var repo = require('../repos/' + repo_folder + '/repo.json');
  router.get('/' + repo_folder + '/' + repo.repo.image, function (req, res, next) {
    res.sendFile(path.resolve('../repos/' + req.url));
  });
}

module.exports = router;
