(function() {
  module.exports = function(grunt) {
    grunt.initConfig({
      coffee: {
        compile: {
          files: {
            '.js': '**/*.coffee'
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.registerTask('build', ['coffee']);
    return grunt.registerTask('default', ['build']);
  };

}).call(this);

(function() {
  var app;

  app = {
    initialize: function() {
      return this.bindEvents();
    },
    bindEvents: function() {
      return document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
      return app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
      var listeningElement, parentElement, receivedElement;
      parentElement = document.getElementById(id);
      listeningElement = parentElement.querySelector('.listening');
      receivedElement = parentElement.querySelector('.received');
      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');
      return console.log('Received Event: ' + id);
    }
  };

}).call(this);

(function() {
  var HelloWorld;

  HelloWorld = (function() {
    function HelloWorld() {}

    HelloWorld.test = 'test';

    return HelloWorld;

  })();

  console.log('hi');

}).call(this);

(function() {
  var HelloWorld;

  HelloWorld = (function() {
    function HelloWorld() {}

    HelloWorld.test = 'test';

    return HelloWorld;

  })();

  console.log('hi');

}).call(this);

(function() {
  var HelloWorld;

  HelloWorld = (function() {
    function HelloWorld() {}

    HelloWorld.test = 'test';

    return HelloWorld;

  })();

}).call(this);

(function() {
  console.log('hi');

}).call(this);

(function() {
  var cli, middleware;

  cli = require('cli');

  cli.enable('daemon', 'status').setUsage('static.coffee [OPTIONS]');

  cli.parse({
    log: ['l', 'Enable logging'],
    port: ['p', 'Listen on this port', 'number', 8080],
    serve: [false, 'Serve static files from PATH', 'path', './public']
  });

  middleware = [];

  cli.main(function(args, options) {
    var server;
    if (options.log) {
      this.debug('Enabling logging');
      middleware.push(require('creationix/log')());
    }
    this.debug('Serving files from ' + options.serve);
    middleware.push(require('creationix/static')('/', options.serve, 'index.html'));
    server = this.createServer(middleware).listen(options.port);
    return this.ok('Listening on port ' + options.port);
  });

}).call(this);

(function() {
  var i, j, _i;

  j = 0;

  for (i = _i = 0; _i <= 5; i = ++_i) {
    j += i;
  }

  exports.name = "mock_coffee_" + j;

}).call(this);

(function() {
  var cubes, list, math, num, number, opposite, race, square,
    __slice = [].slice;

  number = 42;

  opposite = true;

  if (opposite) {
    number = -42;
  }

  square = function(x) {
    return x * x;
  };

  list = [1, 2, 3, 4, 5];

  math = {
    root: Math.sqrt,
    square: square,
    cube: function(x) {
      return x * square(x);
    }
  };

  race = function() {
    var runners, winner;
    winner = arguments[0], runners = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return print(winner, runners);
  };

  if (typeof elvis !== "undefined" && elvis !== null) {
    alert("I knew it!");
  }

  cubes = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      num = list[_i];
      _results.push(math.cube(num));
    }
    return _results;
  })();

}).call(this);

(function() {
  module.exports = function(grunt) {
    grunt.initConfig({
      phonegap: {
        config: {
          root: 'test/fixtures/www',
          cordova: 'test/fixtures/.cordova',
          path: 'test/phonegap',
          releases: 'test/releases',
          plugins: ['../fixtures/org.apache.cordova.core.device'],
          platforms: ['android'],
          config: 'test/fixtures/www/custom_config.xml',
          verbose: false
        }
      },
      clean: {
        tasks: ['tasks'],
        test: ['test']
      },
      nodeunit: {
        tests: ['test/*_test.js']
      },
      copy: {
        test_fixtures: {
          files: [
            {
              expand: true,
              cwd: 'src/test/fixtures',
              src: ['**/*'],
              dest: 'test/fixtures/'
            }
          ]
        },
        test_cordova: {
          files: [
            {
              expand: true,
              cwd: 'src/test/fixtures/.cordova',
              src: ['**/*'],
              dest: 'test/fixtures/.cordova'
            }
          ]
        }
      },
      coffee: {
        tasks: {
          expand: true,
          cwd: 'src/tasks/',
          src: '**/*.coffee',
          dest: 'tasks/',
          ext: '.js'
        },
        test: {
          expand: true,
          cwd: 'src/test/',
          src: '**/*.coffee',
          dest: 'test/',
          ext: '.js'
        }
      },
      watch: {
        coffee: {
          files: ['src/**/*.coffee', 'Gruntfile.coffee'],
          tasks: ['default']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.registerTask('test', function() {
      grunt.loadTasks('tasks');
      return grunt.task.run('phonegap:build', 'nodeunit');
    });
    grunt.registerTask('run', function() {
      grunt.loadTasks('tasks');
      return grunt.task.run('phonegap:run');
    });
    grunt.registerTask('build', ['clean', 'copy', 'coffee']);
    return grunt.registerTask('default', ['build', 'test']);
  };

}).call(this);

(function() {
  var DepGraph, _,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  _ = require('underscore');

  DepGraph = (function() {
    function DepGraph() {
      this.map = {};
    }

    DepGraph.prototype.add = function(id, depId) {
      var _base;
      if ((_base = this.map)[id] == null) {
        _base[id] = [];
      }
      if (__indexOf.call(this.map[id], depId) >= 0) {
        return false;
      }
      this.map[id].push(depId);
      return this.map[id];
    };

    DepGraph.prototype.getChain = function(id) {
      var chain, deps, leafNode, visit, visited, _i, _len, _ref,
        _this = this;
      deps = this.descendantsOf(id);
      chain = [];
      visited = {};
      visit = function(node) {
        var parent, _i, _len, _ref;
        if (visited[node] || node === id) {
          return;
        }
        visited[node] = true;
        _ref = _this.parentsOf(node);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          parent = _ref[_i];
          if (__indexOf.call(deps, parent) >= 0) {
            visit(parent);
          }
        }
        return chain.unshift(node);
      };
      _ref = _.intersection(deps, this.leafNodes()).reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        leafNode = _ref[_i];
        visit(leafNode);
      }
      return chain;
    };

    DepGraph.prototype.leafNodes = function() {
      var allNodes, node, _i, _len, _ref, _results;
      allNodes = _.uniq(_.flatten(_.values(this.map)));
      _results = [];
      for (_i = 0, _len = allNodes.length; _i < _len; _i++) {
        node = allNodes[_i];
        if (!((_ref = this.map[node]) != null ? _ref.length : void 0)) {
          _results.push(node);
        }
      }
      return _results;
    };

    DepGraph.prototype.parentsOf = function(child) {
      var node, _i, _len, _ref, _results;
      _ref = _.keys(this.map);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if (__indexOf.call(this.map[node], child) >= 0) {
          _results.push(node);
        }
      }
      return _results;
    };

    DepGraph.prototype.descendantsOf = function(parent, descendants, branch) {
      var child, _i, _len, _ref, _ref1;
      if (descendants == null) {
        descendants = [];
      }
      if (branch == null) {
        branch = [];
      }
      descendants.push(parent);
      branch.push(parent);
      _ref1 = (_ref = this.map[parent]) != null ? _ref : [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        child = _ref1[_i];
        if (__indexOf.call(branch, child) >= 0) {
          throw new Error("Cyclic dependency from " + parent + " to " + child);
        }
        if (__indexOf.call(descendants, child) >= 0) {
          continue;
        }
        this.descendantsOf(child, descendants, branch.slice(0));
      }
      return descendants.slice(1);
    };

    return DepGraph;

  })();

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = DepGraph;
  } else {
    this.DepGraph = DepGraph;
  }

}).call(this);

(function() {
  var DepGraph, depGraph;

  DepGraph = require('../lib/dep-graph.js');

  depGraph = new DepGraph;

  exports['Direct dependencies are chained in original order'] = function(test) {
    depGraph.add('0', '1');
    depGraph.add('0', '2');
    depGraph.add('0', '3');
    test.deepEqual(depGraph.getChain('0'), ['1', '2', '3']);
    return test.done();
  };

  exports['Indirect dependencies are chained before their dependents'] = function(test) {
    depGraph.add('2', 'A');
    depGraph.add('2', 'B');
    test.deepEqual(depGraph.getChain('0'), ['1', 'A', 'B', '2', '3']);
    return test.done();
  };

  exports['getChain can safely be called for unknown resources'] = function(test) {
    test.doesNotThrow(function() {
      return depGraph.getChain('Z');
    });
    test.deepEqual(depGraph.getChain('Z'), []);
    return test.done();
  };

  exports['Cyclic dependencies are detected'] = function(test) {
    depGraph.add('yin', 'yang');
    depGraph.add('yang', 'yin');
    test.throws(function() {
      return depGraph.getChain('yin');
    });
    test.throws(function() {
      return depGraph.getChain('yang');
    });
    return test.done();
  };

  exports['Arc direction is taken into account (issue #1)'] = function(test) {
    depGraph.add('MAIN', 'One');
    depGraph.add('MAIN', 'Three');
    depGraph.add('One', 'Two');
    depGraph.add('Two', 'Three');
    test.deepEqual(depGraph.getChain('MAIN'), ['Three', 'Two', 'One']);
    return test.done();
  };

  exports['Dependency ordering is consistent (issue #2)'] = function(test) {
    depGraph.add('Head', 'Neck');
    depGraph.add('Head', 'Heart');
    depGraph.add('Heart', 'Neck');
    depGraph.add('Neck', 'Shoulders');
    test.deepEqual(depGraph.getChain('Head'), ['Shoulders', 'Neck', 'Heart']);
    return test.done();
  };

  exports['Nodes with same dependencies do not depend on each other (issue #6)'] = function(test) {
    depGraph.add('Java', 'JVM');
    depGraph.add('JRuby', 'JVM');
    test.deepEqual(depGraph.getChain('Java'), ['JVM']);
    test.deepEqual(depGraph.getChain('JRuby'), ['JVM']);
    return test.done();
  };

}).call(this);
