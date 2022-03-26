
const { exec } = require('child_process');
module.exports = ({ branch }) => {
	console.log('')
	console.log('... pulling branch')
	exec(`git fetch && git checkout ${branch} && git pull`, (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`);
			return;
		}

		stdout && console.log(stdout);
		stderr && console.log(stderr);
	});
};
