# Heroku PG filter
Allows to specify `from` or `to` options dates to filter backups

Example:
* ```heroku pg-filter:backups --app demo-app --to 2017-10-12``` backups made before specified date (including)
* ```heroku pg-filter:backups --app demo-app --from 2017-10-12``` backups made after specified date (including)

## Installation
```heroku plugins:install heroku-pg-filter@1.0.0```
