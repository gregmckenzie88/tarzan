
const inquirer = require('inquirer');
const getBranches = require('./getBranches');
const pullBranch = require('./pullBranch');

module.exports = async () => {
	const branches = await getBranches();
	const questions = [
		{
			type: 'rawlist',
			name: 'branch',
			message: '🌴   Select a branch',
			choices: branches,
			filter: (b) => b.replace('* ', ''),
		},
	];

	inquirer
		.prompt(questions)
		.then(pullBranch)
		.catch((e) => console.log(e));
}