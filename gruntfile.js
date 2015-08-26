'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        less: {
            task: {
                options: {
                    paths: ["dev/styles"],
                    // cssmin remove soucemap in "prod" version
                    // sourceMap: true,
                    // sourceMapFileInline: true,
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
            },
            // helper task for responsive_images - clean img working folder
            resp_img: {
                src: [
                    "dev/img/*.*"
                ]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'dev/',
                src: [
                    // 'img/**',
                    // 'pict/**',
                    // 'fonts/**',
                    '*.html',
                    'favicon.ico',
                ],
                dest: 'prod/',
            },
            // images for jquery-ui theme
            extra: {
                expand: true,
                cwd: 'bower_components/jquery-ui/themes/base/',
                src: 'images/**',
                dest: 'prod/styles/',
            },
            // helper task for responsive_images - copy src images to working folder
            resp_img: {
                expand: true,
                cwd: 'dev/img/src/',
                src: '*.*',
                dest: 'dev/img/',
            },
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
        imagemin: {
            task: {
                options: {
                    use: [mozjpeg({
                        quality: 75
                    })],
                },
                files: [{
                    expand: true,
                    cwd: 'dev/img/',
                    src: ['*.*'],
                    dest: 'prod/img/'
                }]
            }
        },
        responsive_images: {
            "main-billboard": {
                options: {
                    sizes: [
                        {
                            width: "320px",
                            height: "390px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w320px",
                            quality: 92,
                        },
                        {
                            width: "480px",
                            height: "390px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w480px",
                            quality: 92,
                        },
                        {
                            width: "767px",
                            height: "425px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w767px",
                            quality: 92,
                            gravity: "North",
                        },
                        {
                            width: "1200px",
                            height: "600px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w1200px",
                            quality: 92,
                            gravity: "North",
                        },
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'dev/img/src/',
                    src: 'bg-main-billboard.jpg',
                    dest: 'dev/img/',
                }],
            },
            "main-billboard@2x": {
                options: {
                    sizes: [
                        {
                            width: "640px",
                            height: "780px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w320px@2x",
                            quality: 92,
                        },
                        {
                            width: "960px",
                            height: "780px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w480px@2x",
                            quality: 92,
                        },
                        {
                            width: "1534px",
                            height: "850px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w767px@2x",
                            quality: 92,
                            gravity: "North",
                        },
                        {
                            width: "2400px",
                            height: "1200px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w1200px@2x",
                            quality: 92,
                            gravity: "North",
                        },
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'dev/img/src/2x/',
                    src: 'bg-main-billboard.jpg',
                    dest: 'dev/img/',
                }],
            },
            "feature-billboards": {
                options: {
                    sizes: [
                        {
                            width: "320px",
                            height: "255px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w320px",
                            quality: 92,
                        },
                        {
                            width: "480px",
                            height: "255px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w480px",
                            quality: 92,
                        },
                        {
                            width: "767px",
                            height: "255px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w767px",
                            quality: 92,
                        },
                        {
                            width: "800px",
                            height: "256px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w800px",
                            quality: 92,
                        },
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'dev/img/src/',
                    src: ['photo-city.jpg', 'photo-bridge.jpg'],
                    dest: 'dev/img/',
                }],
            },
            "feature-billboards@2x": {
                options: {
                    sizes: [
                        {
                            width: "640px",
                            height: "510px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w320px@2x",
                            quality: 92,
                        },
                        {
                            width: "960px",
                            height: "510px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w480px@2x",
                            quality: 92,
                        },
                        {
                            width: "1534px",
                            height: "510px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w767px@2x",
                            quality: 92,
                        },
                        {
                            width: "1600px",
                            height: "512px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w800px@2x",
                            quality: 92,
                        },
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'dev/img/src/2x/',
                    src: ['photo-city.jpg', 'photo-bridge.jpg'],
                    dest: 'dev/img/',
                }],
            },
            "map-dummy": {
                options: {
                    sizes: [
                        {
                            width: "320px",
                            height: "593px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w320px",
                            quality: 92,
                        },
                        {
                            width: "480px",
                            height: "593px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w480px",
                            quality: 92,
                        },
                        {
                            width: "767px",
                            height: "593px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w767px",
                            quality: 92,
                        },
                        {
                            width: "1200px",
                            height: "595px",
                            aspectRatio: false,
                            rename: false,
                            suffix: "@w1200px",
                            quality: 92,
                        },
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'dev/img/src/',
                    src: 'map-dummy.jpg',
                    dest: 'dev/img/',
                }],
            },
        },
        htmlmin: {
            task: {
                options: {
                    // removeComments: true,
                    collapseWhitespace: true
                },
                files: { 
                    'prod/index.html': 'prod/index.html', 
                }
            },
        },
        cssmin: {
            task: {
                options: {
                    keepSpecialComments: 0,
                },
                files: {
                    'prod/styles/bundle.css': 'prod/styles/bundle.css',
                }
            }
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

    grunt.registerTask('resp-img-task', [
        'clean:resp_img',
        'copy:resp_img',
        'responsive_images',
    ]);

    grunt.registerTask('build', [
        'clean:prod',
        'copy:main',
        'copy:extra',

        'usemin-task',
        'autoprefixer',

        'resp-img-task',
        'imagemin',

        'htmlmin',
        'cssmin:task',
    ]);
};
