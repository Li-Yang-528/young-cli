/**
 * @param {string} patterns 
 * @param {object} options https://github.com/mrmlnc/fast-glob#options-3 
 * @returns {array} [paths]
 * 
 */
function glob( patterns, options) {
    return require( 'globby' ).sync(
        patterns,
        options = Object.assign( {
            onlyFiles: true,
            gitignore: true,
            ignore: [ '**/node_modules/**', '**/.git/**' ],
            dot: true,
            absolute: false,
            cwd: __dirname
        }, options)
    );
};

glob( './lib/**').forEach( filename => {
    Object.assign( exports, require( filename ) )
});

exports.glob = glob;
exports.execa = require( 'execa' );
exports.ora = require( 'ora' );
