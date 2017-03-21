/**
 * Created by administrator on 3/20/17.
 */

const   webpack = require('webpack'),
        path = require('path');

const libraryName = 'nodemodal';

// Configuration Object
const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output:{
        path : path.resolve(__dirname,'dist'),
        filename : 'index.js',
        jsonpFunction:'loader',
        library: libraryName,
        libraryTarget : 'var'
    },
    watch: true,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
};

// Export configuration object
module.exports = config;
