#! /usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const main = require('../src/index');

const result = main(Object.assign({}, argv, {
	pattern: argv._[0]
}));

console.log(result);
