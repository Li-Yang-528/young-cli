const chalk = require( 'chalk' );

const log = ( type = '', typeMsg = '', msg = '' ) => console.log(
    chalk[ type ].black( typeMsg )
    + ": " +
    chalk.bgBlackBright.white.dim( msg ) 
)

exports.info = ( msg ) => log( 'bgBlue', 'INFO', msg );

exports.success = ( msg ) => log( 'bgGreen', 'SUCCESS', msg );

exports.warn = ( msg ) => log( 'bgYellow', 'WARN', msg );

exports.error = ( msg ) => log( 'bgRed', 'ERROR', msg );

exports.logo = () => {
    console.log( `
          _______           _        _______        _______  _       _________
|\\     /|(  ___  )|\\     /|( (    /|(  ____ \\      (  ____ \\( \\      \\__   __/
( \\   / )| (   ) || )   ( ||  \\  ( || (    \\/      | (    \\/| (         ) (
 \\ (_) / | |   | || |   | ||   \\ | || |      _____ | |      | |         | |
  \\   /  | |   | || |   | || (\\ \\) || | ____(_____)| |      | |         | |
   ) (   | |   | || |   | || | \\   || | \\_  )      | |      | |         | |
   | |   | (___) || (___) || )  \\  || (___) |      | (____/\| (____/\\___) (___
   \\_/   (_______)(_______)|/    )_)(_______)      (_______/(_______/\\_______/
                                                                              
` );
}