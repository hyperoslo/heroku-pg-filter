'use strict'

const flatten = require('lodash.flatten')

exports.topics = [
  {name: 'pg-filter', description: 'list backups with filtering'}
]

exports.commands = flatten([
  require('./commands/backups-filtered'),
])

exports.host = require('./lib/host')
exports.fetcher = require('./lib/fetcher')
exports.psql = require('./lib/psql')
