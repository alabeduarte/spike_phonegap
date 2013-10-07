#
# * grunt-phonegap
# * https://github.com/logankoester/grunt-phonegap
# *
# * Copyright (c) 2013 Logan Koester
# * Licensed under the MIT license.
#

module.exports = (grunt) ->
  #
  # Project configuration.
  grunt.initConfig    

    coffee:
      compileBare:
        options:
          bare: true
        files:
          'js/index.js': 'coffee/index.coffee'

      compile:
        options:
          bare: true
        files:
          'js/server.js': 'coffee/server.coffee'
          

  grunt.loadNpmTasks 'grunt-contrib-coffee'

  grunt.registerTask 'build', ['coffee']
  grunt.registerTask 'default', ['build']
