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
*/

var argv = require("optimist")
var shell = require("shelljs")
