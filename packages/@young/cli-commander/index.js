const program = require( 'commander' );

program
    .version( require( '../../../package' ).version, '-v, --version' )
    .usage( '<command> [options]' )

program
    .command( 'create <app-name>' )
    .description( '创建一个项目' )
    .action( appname => {
        require( '../cli-inquirer' )().then( answer => { 
            console.log( process.cwd() )
        })
    } )

program
    .command( 'serve' )
    .description( '启动开发环境' )
    .action( res => {
        console.log( res )
    } )

program
    .command( 'build' )
    .description( '启动构建应用' )
    .action( res => {
        console.log( res )
    } )

program.parse( process.argv );

