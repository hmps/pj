function noTabs(strings, ...values) {
	return strings
		.map((str, i) =>
			str + (values[i] ? values[i] : '')
		)
		.join('')
		.replace(/^\t|^ {2,}/gim, '');
}

module.exports = function () {
	return noTabs`
	Usage: pj [pattern] [command]

	Where pattern is a string that you want to search for among the keys in package.json.
	So "v" would find "version" (and any other keys starting with "v") and print that to the console.

	If you omit the pattern, the entire contents of package.json will be printed.

	If you use one of the commands below, nothing from package.json will be printed.

	Available commands:

	help        prints this help text
	version     prints the current version of this tool
	`;
};
