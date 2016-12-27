PEE-JAY
=======

PJ is a easy to use CLI tool to read `package.json` files. It sprung out of my own work where I often find myself looking for what version a package is, what dependency ranges are defined, what the main file is etc.

# Usage

`$ pj` will print out the entire package.json.
`$ pj [pattern]` will find property keys in package.json that matches the given pattern. E.g. "v" will find and print "version" and any other keys starting with "v".

# License
MIT (c) [Hampus Persson](http://hmps.se)
