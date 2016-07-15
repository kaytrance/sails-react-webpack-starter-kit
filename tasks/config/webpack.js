var path = require("path");
var project_dir = __dirname + '/../../';
var webpack = require("webpack");

module.exports = function(grunt) {
    grunt.config.set('webpack', {
        dev: {
            context: 'assets/app',
            entry: './app.js',
            module: {
                loaders: [{
                    test: /\.js?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015'],
                        plugins: [],
                    }
                }]
            },
            resolve: {
                root: [
                    path.resolve(project_dir)
                ],
            },
            output: {
                path: ".tmp/public/js",
                filename: "app.min.js"
            },
            plugins: [
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.OccurenceOrderPlugin(),
                // new webpack.optimize.UglifyJsPlugin({
                //     mangle: true,
                //     sourcemap: false
                // }),
            ],
    
            hot: false,
            inline: false,
            keepalive: false,
            stats: false,
            watch: false,

        }
    });

    grunt.loadNpmTasks('grunt-webpack');
};