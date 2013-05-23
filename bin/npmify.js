/*  When used the first time it asks for your github name
        and maybe credential information

    Takes a file path as argument and then asks for

        - module name
        - description

    Shells out to locally installed `ngen` with module name
        and description

    Goes into folder and runs

        - git init
        - git remote add origin git@github.com:User/name
        - makes a call to github to create that repository
        - git add .
        - git commit -m "initial"
        - git push origin master
        - npm publish

    Missing pieces !!!

        - testlingify !!
        - move some code into index.js so just
        - ngenplus <name> ./lib/fu.js
        - write tests for me? Please?
        - Extract an example from a block comment in the file
            and place that in the README!
*/

var argv = require("optimist")
var shell = require("shelljs")
var fs = require("fs")
var path = require("path")

if (argv.help) {
    fs.readFileSync(path.join(__dirname, "usage.txt")).pipe(process.stdout)
} else {
    main()
}

function main() {

}
