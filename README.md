[![Build Status](https://travis-ci.org/watchiot/watchiot-repo-config.svg?branch=master)](https://travis-ci.org/watchiot/watchiot-repo-config) [![Code Climate](https://codeclimate.com/github/watchiot/watchiot-repo/badges/gpa.svg)](https://codeclimate.com/github/watchiot/watchiot-repo)

# Watchiot Repository

Repository of configurations

This project brings together all predefined configurations and agents.

## Introduction

You can see the _json_ response used by **Watchiot** site

List of all repository configurations
http://repo.watchiot.org/repos

```
{"monitor_hd":{"title":"HD Monitor","abstract":"Hard drive monitor","image":"hd.svg","tags":"hardware"},"monitor_mem":{"title":"Memory Monitor","abstract":"Memory monitor","image":"mem.svg","tags":"hardware"}}
```

Into each configuration folder will be defined a config.yml file with the monitor parameters,
conditions and ways to notifications

We can access to the **monitor_hd**'s *config.yml* file requested the url
http://repo.watchiot.org/repos/monitor_hd/config.yml

```
{"yml":"params:\n    server_name: string\n    partition_name: string\n    total_space: integer\n    free_space: integer\n    use_space: integer\n    use_percet_space: integer\n    free_percent_space: integer\n\ncritical:\n    when: (server_name == \"my_server1\" and free_space < 2) or (server_name == \"my_server2\" and free_space <= 7)\n    repeat: 20\n    email:\n        tpl: You have the partition ${name} with ${free_percent_space} percent free"}
```

Into each configuration folder will be defined a readme.md file with the description on installation process and usage.

We can access to the **monitor_hd**'s *readme.md* file requested the url
http://repo.watchiot.org/repos/monitor_hd/readme.md

```
{"readme":"# Hard Driver Monitor\n\nThis configuration monitor the hard drivers on linux OS.\n\n  - Donwload the installer file on [GitHub]\n  \n  ```\n  $ gem install wiot-hdmonitor\n  $ wiot-hdmonitor run\n  ```\n\n[github]: <https://github.com/gorums/wiot-hdmonitor>\n"}
```

See an [example] of configuration repository

[example]: <https://github.com/watchiot/watchiot-repo/edit/master/repos/monitor_hd>

## Contributing

We support and encourage contributions.

The project has a *repos* folder. Inside it, you have to add your new configuration folder with the info shown below and send us a pull request.

- Your configuration folder (the name has to be only alphanumeric characters and underscore)
- Inside your configuration folder
  - repo.json (title, abstract, svg or png file name with the extension and tags)
  - config.yml (configuration parameters. [Click here] for see more details about config.yml)
  - readme.md (Descriptions how it can install and usage)
  - svg or png image

- if your configuration PR is merge. We are going to add into the file **repos.json** the name of your configuration folder.

[Click here]: <http://docs.watchiot.org/#/config/>

## License

(The MIT License)

Copyright (c) 2016 WatchIoT

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

