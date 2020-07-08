const program = require( 'commander' );
module.exports = function () {
    program
        .version( require( '../../package' ).version, '-v, --version' )
        .usage( '<command> [options]' )
    
    program    
        .command( 'create <app-name>' )
        .description( '创建一个项目把' )
        .action( res => { 
            
        })
    
    program.parse( process.argv )
        
}

