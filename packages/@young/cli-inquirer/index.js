// const inquirer = require( 'inquirer' );
const { glob } = require( '../cli-util' );
module.exports =function getInquirer() {
    return glob( './lib/**', { cwd: __dirname } ).reduce( ( init, paths ) => {
        require( paths )( init )
        return init;
    }, []);
}

