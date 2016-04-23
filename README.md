[![Build Status](https://travis-ci.org/watchiot/watchiot-repo.svg?branch=master)](https://travis-ci.org/watchiot/watchiot-repo) [![Code Climate](https://codeclimate.com/github/watchiot/watchiot-repo/badges/gpa.svg)](https://codeclimate.com/github/watchiot/watchiot-repo)

# Watchiot Repository

Repository of configurations

This project group all the predefine configurtations.

## How contribute and add a new configuration

The project has a *repos* folder. Inside it, you have to add your new configuration folder with the info shown below and send us a pull request.

-- 
- Your configuration folder (the name has to be only alphanumeric characters and underscope)
- Inside your configuration folder
  - repo.json (title, abstract, svg file path)
  - config.yaml (Template of the configuration.)
  - readme.md (Details how it can use, more descriptions.)
  - svg image  

--
- if your configuration PR is merge. We are going to add into the file *repos.json* the name of your configuration folder
 
--
You can see the json response used by watchiot site

http://repo.watchiot.org/repos

```
{"monitor_hd":{"title":"HD Monitor","abstract":"Hard drive monitor","image":"hd.svg"},"monitor_mem":{"title":"Memory Monitor","abstract":"Memory monitor","image":"mem.svg"}}
```

http://repo.watchiot.org/repos/monitor_hd/readme.md

```
{"readme":"# Hard Driver Monitor\n\nThis configuration monitor the hard drivers on linux OS.\n\n  - Donwload the installer file on [GitHub]\n  \n  ```\n  $ gem install wiot-hdmonitor\n  $ wiot-hdmonitor run\n  ```\n\n[github]: <https://github.com/gorums/wiot-hdmonitor>\n"}
```

http://repo.watchiot.org/repos/monitor_hd/config.yaml

```
{"yaml":"params:\n    server_name: string\n    partition_name: string\n    total_space: integer\n    free_space: integer\n    use_space: integer\n    use_percet_space: integer\n    free_percent_space: integer\n\ncritical:\n    when: (server_name == \"my_server1\" and free_space < 2) or (server_name == \"my_server2\" and free_space <= 7)\n    repeat: 20\n    email:\n        tpl: You have the partition ${name} with ${free_percent_space} percent free"}
```

See an [example] of configuration repository

[example]: <https://github.com/watchiot/watchiot-repo/edit/master/repos/monitor_hd>
