const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' )
const Config = require( 'webpack-chain' );

module.exports = ( options ) => {
    const config = new Config();

    return config.toConfig();
}
