/*jshint node: true */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'src/jquery.taboverride.js',
                'examples/js/*.js'
            ]
        },
        clean: {
            build: ['build'],
            docs: ['docs']
        },
        concat: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %>\r\n' +
                        'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.licenses[0].url %> */\r\n\r\n' +
                        '/**\r\n' +
                        ' * @fileOverview Tab Override jQuery plugin\r\n' +
                        ' * @author       <%= pkg.author.name %>\r\n' +
                        ' * @version      <%= pkg.version %>\r\n' +
                        ' */\r\n\r\n'
                },
                src: ['src/jquery.taboverride.js'],
                dest: 'build/jquery.taboverride.js'
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                preserveComments: 'some'
            },
            dist: {
                files: {
                    'build/jquery.taboverride.min.js': ['build/jquery.taboverride.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('generateJQueryManifest', 'Generates the taboverride.jquery.json file.', function () {
        // read the package.json file
        // don't use config.pkg, since we don't want to modify it
        var contents = grunt.file.readJSON('package.json');

        // change the name to "taboverride"
        contents.name = 'taboverride';

        // add title, docs, and demo
        contents.title = 'Tab Override';
        contents.docs = 'https://github.com/wjbryant/jquery.taboverride';
        contents.demo = 'http://wjbryant.github.com/taboverride/';

        // remove devDependencies
        delete contents.devDependencies;

        // change "libDependencies" to "dependencies"
        contents.dependencies = contents.libDependencies;
        delete contents.libDependencies;

        // change "taboverride" dependency to "taboverride-lib"
        contents.dependencies['taboverride-lib'] = contents.dependencies.taboverride;
        delete contents.dependencies.taboverride;

        // write the file using pretty-printed JSON
        grunt.file.write(
            'taboverride.jquery.json',
            JSON.stringify(contents, null, 4).replace(/\n/g, '\r\n') + '\r\n'
        );
    });

    grunt.registerTask('generateBowerManifest', 'Generates the bower.json file.', function () {
        grunt.config.requires(['pkg']);

        var contents = grunt.template.process('{\r\n' +
                '    "name": "<%= pkg.name %>",\r\n' +
                '    "version": "<%= pkg.version %>",\r\n' +
                '    "main": "./build/jquery.taboverride.js",\r\n' +
                '    "dependencies": {\r\n' +
                '        "jquery": "<%= pkg.libDependencies.jquery %>",\r\n' +
                '        "taboverride": "<%= pkg.libDependencies.taboverride %>"\r\n' +
                '    }\r\n' +
                '}\r\n');

        grunt.file.write('bower.json', contents);
    });

    grunt.registerTask('generateAPIDocs', 'Generates API documentation using JSDoc 3.', function () {
        grunt.task.requires(['concat']);

        var done = this.async(),
            jsdoc = 'node_modules/jsdoc/jsdoc',
            cmd = jsdoc,
            args = [];

        // work around for https://github.com/joyent/node/issues/2318
        if (process.platform === 'win32') {
            cmd = 'cmd';
            args.push('/c', jsdoc.replace(/\//g, '\\'));
        }

        args.push('-d', 'docs', 'build/jquery.taboverride.js');

        grunt.util.spawn(
            {
                cmd: cmd,
                args: args
            },
            function (error, result) {
                if (error) {
                    grunt.log.error(result.toString());
                }
                done(!error);
            }
        );
    });

    grunt.registerTask('default', [
        'jshint', 'clean:build', 'concat', 'uglify', 'generateJQueryManifest',
        'generateBowerManifest', 'clean:docs', 'generateAPIDocs'
    ]);
};
