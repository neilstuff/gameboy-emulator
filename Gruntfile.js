module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['src/**/*.js'],
                dest: 'assets/javascripts/gameboy.js'
            }
        },

        uglify: {
            dist: {
                files: {
                    "assets/javascripts/gameboy.js": ["assets/javascripts/gameboy.js"]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);
};
