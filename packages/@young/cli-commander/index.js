const program = require( 'commander' );

program
    .version( require( '../../../package' ).version, '-v, --version' )
    .usage( '<command> [options]' )

program
    .command( 'create <app-name>' )
    .description( '创建一个项目' )
    .action( res => {
        console.log( res )
    } )

program.parse( process.argv )

