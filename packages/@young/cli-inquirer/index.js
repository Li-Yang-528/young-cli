const inquirer = require( 'inquirer' );
const { glob, logo } = require( '../cli-util' );
function getQuestion() {
    return glob( './lib/**', { cwd: __dirname } ).reduce( ( init, paths ) => {
        require( paths )( init )
        return init;
    }, []);
}

module.exports = function getInquirer( ) {
    logo();
    return inquirer.prompt( getQuestion() )
}

