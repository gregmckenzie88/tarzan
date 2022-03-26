
const { exec } = require('child_process');
module.exports = () => {
	return new Promise((resolve, reject) => {
		exec('git branch --sort=-committerdate', (err, stdout, stderr) => {
			if (err) {
				console.error(`exec error: ${err}`);
				reject(err);
				return;
			}
			const branches = stdout.split("\n").slice(0, 20)
			resolve(branches);
		});
	});
};
