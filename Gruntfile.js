module.exports = function (grunt) {

    "use strict";

    // Load all npm tasks declared in package.json
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var options = {};

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'settings': options,

        // LESS
        'less': {
            development: {
                options: {
                    sourceMap: true,
                    sourceMapCss: 'css/main.css/map',
                    dumpLineNumbers: 'all'
                },
                files: {
                    'css/main.css': 'less/main.less'
                }
            }
        },

        'watch': {
            options: {
                livereload: true
            },
            less   : {
                files: [
                    'less/*.less'
                ],
                tasks: ['less']
            }
        }

    });


};