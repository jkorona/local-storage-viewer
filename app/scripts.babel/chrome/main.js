/* global requirejs: true */
requirejs.config({
  paths: {
    'lodash': '../bower_components/lodash/lodash'
  }
});
requirejs(['scripts/local-storage.js'], function(/*app*/) {});