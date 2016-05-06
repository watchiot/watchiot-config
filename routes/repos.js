var express = require('express');
var router = express.Router();

var fs = require('fs');

/* metadata about the repos */
var repos = require('../repos/repos.json');

/*
 * GET /repos
 *
 * return: A Json the all the repositories
 */
router.get('/', function(req, res, next) {
  var lst_repos = {};
  for (var i in repos.repos) {
    repo_folder = repos.repos[i];
    repo = require('../repos/' + repo_folder + '/repo.json');
    lst_repos[repo_folder] = repo.repo;
  }

  res.json(lst_repos);
});


for (var i in repos.repos) {
  repo_folder = repos.repos[i];

  /*
   * GET /repos/{repo_name}/{name_image.svg}
   *
   * return: the svg image
   */
  repo = require('../repos/' + repo_folder + '/repo.json');
  router.get('/' + repo_folder + '/' + repo.repo.image, function (req, res, next) {
    res.sendFile(req.url, { root : __dirname + '/../repos'});
  });

  /*
   * GET /repos/{repo_name}/config.yml
   *
   * return: A Json with the yaml config info
   */
  router.get('/' + repo_folder + '/config.yml', function (req, res, next) {
    yml = fs.readFileSync(__dirname + '/../repos' + req.url);
    res.json({'yml': yml.toString()});
  });

  /*
   * GET /repos/{repo_name}/readme.md
   *
   * return: A Json with the readme.md config info
   */
  router.get('/' + repo_folder + '/readme.md', function (req, res, next) {
    readme = fs.readFileSync(__dirname + '/../repos' + req.url);
    res.json({'readme': readme.toString()});
  });
}

module.exports = router;
