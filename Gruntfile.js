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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.registerTask('default', ['sass']);

};