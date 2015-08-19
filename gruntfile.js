'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        less: {
            task: {
                options: {
                    paths: ["dev/styles"],
                    // cssmin remove soucemap in "prod" version
                    sourceMap: true,
                    sourceMapFileInline: true,
                },
                src: 'dev/styles/style.less',
                dest: 'dev/styles/style.css'
            },
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
                    baseDir: "./",
                },
            }
        },
        clean: {
            prod: {
                src: [
                    ".tmp",
                    "prod",
                ]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'dev/',
                src: [
                    'img/**',
                    'pict/**',
                    'fonts/**',
                    'favicon.ico',
                    '*.html'
                ],
                dest: 'prod/',
            },
            // images for jquery-ui theme
            extra: {
                expand: true,
                cwd: 'bower_components/jquery-ui/themes/base/',
                src: 'images/**',
                dest: 'prod/styles/',
            }
        },
        autoprefixer: {
            dev: {
                options: {
                    browsers: ['last 4 versions'],
                },
                src:  'prod/styles/bundle.css',
                dest: 'prod/styles/bundle.css',
            }
        },
        useminPrepare: {
            html: 'dev/index.html',
            options: {
                dest: 'prod'
            }
        },
        usemin: {
            html: 'prod/index.html',
        },
    });

    // cmd line tasks

    grunt.registerTask('server', [
        'less',
        'browserSync',
        'watch',
    ]);

    grunt.registerTask('usemin-task', [
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'usemin'
    ]);

    grunt.registerTask('build', [
        'clean',
        'copy:main',
        'copy:extra',
        'usemin-task',
        'autoprefixer',
    ]);
};
