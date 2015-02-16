module.exports = function(grunt) {
  grunt.initConfig({
    templatePath: 'assets/javascripts/src/views/templates',
    outputPath: 'assets/javascripts/src/views/templates.js',
    jshint: {
      options: {
        jshintrc: true,
        ignores: [
                 'assets/javascripts/src/components/**/*.js'
                 ]
      },
      target: ['assets/javascripts/'],
    },
    sass: {
      dist: {
        files: {
          'dist/build/styles/application.css': 'assets/styles/application.scss'
        }
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/build/scripts/application.js': [
            'assets/javascripts/src/Game.js'
          ]
        }
      }
    },
    watch: {
      options : {
        livereload: true
      },
      files: ['assets/javascripts/src/**/*.js',
              'assets/styles/**/*.scss'],
      tasks: ['dev']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev',
                     ['jshint', 'sass', 'browserify']);

  grunt.registerTask('build',
                     ['jshint', 'sass', 'browserify']);
};
