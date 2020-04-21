#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('key', 'Manage API Key -- https://nomics.com')
  .command('check', 'Check Crypto Price')
  .parse(process.argv);
