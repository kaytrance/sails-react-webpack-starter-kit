module.exports = function(grunt) {

    grunt.config.set('sass', {
        dev: {
            options: {
                includePaths: [""] // add paths to bower_components, if you have/need some sass imports
            },
            files: [{
                expand: true,
                cwd: 'assets/styles/',
                src: ['*.scss'],
                dest: '.tmp/public/styles/',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};