module.exports = ( program ) => {
    program.push(
        {
            version: [ require( '../../../../package.json' ).version, '-v, --version'],
            usage: '[global options] command'
        }
    )
}