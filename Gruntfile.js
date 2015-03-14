module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ["www"],
            release: ['S:/']
        },
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    /* dest: 'dist',*/
                    dot: true,
                    src: [
                        'app/**/*.js',
                        'bower_components/angularjs/angular.min.js',
                        'bower_components/angular-route/angular-route.min.js',
                        'bower_components/angular-animate/angular-animate.min.js'
                    ]
                }]
            }
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'sha256',
                length: 8
            },
            source: {
                files: [{
                    src: [
                'www/js/**/*.js',
                'www/css/**/*.css',

            ]
        }]
            }
        },
        copy: {
            build: {
                files: [{
                        expand: true,
                        dot: true,
                        dest: 'www',
                        src: [
                        'index.html',
                        'app/**/*',
                        'assets/**/*',
                        'images/*.png',
                        'images/*.svg',
                        'images/*.jpg',
                        'fonts/*.eot',
                        'fonts/*.svg',
                        'fonts/*.woff',
                        'fonts/*.ttf'
                    ]
                }, {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/bootstrap/fonts/',
                        src: '*.*',
                        dest: 'www/assets/fonts'
                        }
                  ]
            },
            release: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'www',
                    src: '**/*', // copy all files and subfolders

                    dest: 'S:/'

                }]
            }
        },
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: 'www'
            }
        },
        usemin: {
            html: ['www/*.html'],
            css: ['www/css/**/*.css'],
            js: ['www/js/**/*.js'],
            options: {
                dirs: ['www'],
                assetsDirs: ['www'],
                patterns: {
                    js: [
                [/["']([^:"']+\.(?:png|gif|jpe?g))["']/img, 'Image replacement in js files']
            ]
                }
            }
        },
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },
        jshint: {
            all: 'app/**/*.js',
            "globals": { // Globals variables.
                //                "jasmine": true,
                /*"angular": true*/
                //                "browser": true,
                //                "element": true,
                //                "by": true,
                //                "io": true,
                //                "_": false,
                //                "$": false
            }
        },
        gitcommit: {
            your_target: {
                options: {
                    cwd: "/path/to/repo"
                },
                files: [
                    {
                        src: ["fileone.txt", "filetwo.js"],
                        expand: true,
                        cwd: "/path/to/repo"
        }
      ]
            }
        },
    });
    // loadNpmTasks
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-git');



    //registerTask   
    grunt.registerTask('build', ['clean:build', 'useminPrepare', 'jshint', 'copy:build', 'concat', 'ngmin', 'cssmin', 'uglify', 'filerev', 'usemin']);
    grunt.registerTask('push', ['copy:release']);
};