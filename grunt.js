module.exports = function (grunt) {
    grunt.initConfig({
        pkg: '<json:taboverride.jquery.json>',
        meta: {
            banner: '/*! jquery.<%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %>\r\n' +
                'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.licenses[0].url %> */',
            fileOverview: '/**\r\n' +
                ' * @fileOverview <%= pkg.title %> jQuery plugin\r\n' +
                ' * @author       <%= pkg.author.name %>\r\n' +
                ' * @version      <%= pkg.version %>\r\n' +
                ' */',
            empty: '<% %>',
            component: '{\r\n' +
                '    "name": "jquery.<%= pkg.name %>",\r\n' +
                '    "version": "<%= pkg.version %>",\r\n' +
                '    "main": "./build/jquery.taboverride.js",\r\n' +
                '    "dependencies": {\r\n' +
                '        "jquery": "<%= pkg.jquery.dependencies.jquery %>",\r\n' +
                '        "taboverride": "<%= pkg.jquery.dependencies[\'taboverride-core\'] %>"\r\n' +
                '    }\r\n' +
                '}'
        },
        lint: {
            all: 'src/jquery.taboverride.js'
        },
        concat: {
            dist: {
                src: ['<banner>', '<banner:meta.fileOverview>', 'src/jquery.taboverride.js'],
                dest: 'build/jquery.taboverride.js'
            },
            newline: {
                src: ['build/jquery.taboverride.min.js', '<banner:meta.empty>'],
                dest: 'build/jquery.taboverride.min.js',
                separator: ''
            },
            component: {
                src: '<banner:meta.component>',
                dest: 'component.json',
                separator: ''
            }
        },
        min: {
            all: {
                src: ['<banner>', 'build/jquery.taboverride.js'],
                dest: 'build/jquery.taboverride.min.js'
            }
        }
        // need to a create custom task for jsdoc-toolkit documentation
    });
    grunt.registerTask('default', 'lint concat:dist min concat:newline concat:component');
};
