const fs = require('fs');
const printHelp = require('../src/help');

const pkg = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`).toString());

/**
 * Find keys in a JSON file and return an array of matches. If no pattern is given, the entire JSON is returned.
 *
 * @param {object} json A JS Object literal to parse for keys
 * @param {string} pattern A string to use as pattern for filtering keys
 *
 * @return {array} An array of all matching keys
 */
function findKeyInJson(json, pattern) {
	return pattern ? Object.keys(pkg).filter(key => key.indexOf(pattern) === 0) : Object.keys(json).map(key => key);
}

module.exports = ({pattern, help, version} = {}) => {
	let result;

	if (help) {
		result = printHelp();
	} else if (version) {
		result = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`)).version;
	} else {
		result = findKeyInJson(pkg, pattern)
			.reduce((str, prop) => {
				return `${str}\n${prop}: ${JSON.stringify(pkg[prop], null, 2)}`;
			}, '')
			.trim();
	}

	return result;
};
