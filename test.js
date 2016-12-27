import fs from 'fs';
import test from 'ava';
import pj from './src/index';

const pkg = JSON.parse(fs.readFileSync(`./package.json`).toString());
test('if --help is passed, it should print the help text', t => {
	const result = pj({help: true});

	t.true(result.indexOf('Usage:') !== -1);
});

test('if --version is passed, it should print the current version from package.json', t => {
	t.is(pkg.version, pj({version: true}));
});

test('it should return all keys that matches the given pattern', t => {
	const keys = ['name', 'version', 'main'];

	keys.forEach(key => t.is(pj({pattern: key}), `${key}: "${pkg[key]}"`));
});

test('it should return the contents of package.json if no pattern is given', t => {
	t.is(typeof pj(), 'string');
});
