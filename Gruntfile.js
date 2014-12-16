module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'css/main.css': 'css/main.scss' // 'destination': 'source'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/src/happyLink.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['sass']);

};