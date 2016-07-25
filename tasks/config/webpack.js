var path = require("path");
var project_dir = __dirname + '/../../';
var webpack = require("webpack");

var prod = process.env.NODE_ENV && process.env.NODE_ENV === 'production';

var pluggins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
];

if (prod)
    pluggins.push(new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        sourcemap: false,
        minimize: true,
    }));

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
                filename: prod ? "app.min.js" : "app.js"
            },
            plugins: pluggins,

            hot: false,
            inline: false,
            keepalive: false,
            watch: false,
            progress: false,

            stats: {
                colors: true,
                hash: false,
                version: false,
                timings: true,
                assets: true,
                chunks: true,
                modules: true,
                reasons: false,
                children: false,
                source: false,
                errors: false,
                errorDetails: false,
                warnings: false,
                publicPath: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
};