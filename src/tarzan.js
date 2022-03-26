#! /usr/bin/env node

const tarzan = require('commander');
const swing = require('./swing');
const { version } = require('../package.json');

tarzan
	.version(version);

tarzan
	.command('swing')
	.description('swing to another branch')
	.action(swing);

tarzan.parse(process.argv);
