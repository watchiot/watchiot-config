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

/* router for config.yaml in json */
for (var index in repos.repos) {
  var repo_folder = repos.repos[index];
  router.get('/' + repo_folder + '/config.yaml', function (req, res, next) {
    yaml = fs.readFileSync(path.resolve('../repos/' + req.url));
    res.json({'yaml': yaml.toString()});
  });
}

/* router for readme.md in json */
for (var index in repos.repos) {
  var repo_folder = repos.repos[index];
  router.get('/' + repo_folder + '/readme.md', function (req, res, next) {
    readme = fs.readFileSync(path.resolve('../repos/' + req.url));
    res.json({'readme': readme.toString()});
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
