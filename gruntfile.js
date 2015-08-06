'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ["dev/styles"],
                    sourceMap: true,
                    sourceMapFileInline: true,
                },
                src: 'dev/styles/style.less',
                dest: 'dev/styles/style.css'
            },
            prod: {
                options: {
                    paths: ["dev/styles"],
                },
                src: 'dev/styles/style.less',
                dest: 'prod/styles/style.css'
            }
        },
        watch: {
            less: {
                files: ['dev/styles/*.less'],
                tasks: ['less']
            },
        },
        browserSync: {
            bsFiles: {
                src: [
                    'dev/**/*.*'
                ]
            },
            options: {
                watchTask: true,
                server: {
                    // commented because of bower in root
                    // baseDir: "./dev/"
                    baseDir: "./",
                },
            }
        },
        clean: {
            prod: {
                src: ["prod"]
            }
        },
        copy: {
            prod: {
                expand: true,
                cwd: 'dev/',
                src: [
                    'img/**',
                    'pict/**',

                    'fonts/**',
                    'js/**',
                    'favicon.ico',
                    '*.html'
                ],
                dest: 'prod/',
            }
        },
        autoprefixer: {
            dev: {
                options: {
                    browsers: ['last 2 versions'],
                },
                src:  'prod/styles/style.css',
                dest: 'prod/styles/style.css',
            }
        },
        cssmin: {
            prod: {
                files: [{
                    expand: true,
                    cwd: 'prod/styles/',
                    src:  'style.css',
                    dest: 'prod/styles/',
                }]
            }
        },
    });

    // cmd line tasks

    grunt.registerTask('dev', [
        'less:dev',
        'browserSync',
        'watch',
    ]);

    grunt.registerTask('prod', [
        'clean',
        'copy',
        'less:prod',
        'autoprefixer',
        'cssmin'
    ]);

    grunt.registerTask('default', [
        'dev',
    ]);
};
