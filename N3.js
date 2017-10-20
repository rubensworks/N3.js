// Replace local require by a lazy loader
var globalRequire = require;
var exports = {};
require = function (submodule) {
  // Load submodules on first access
  return exports[submodule] || Object.defineProperty(exports, submodule, {
    configurable: true,
    enumerable: true,
    get: function () {
      delete exports[submodule];
      return exports[submodule] = globalRequire(submodule);
    },
  })[submodule];
};

// Expose submodules
module.exports = {
  Lexer:        require('./lib/N3Lexer'),
  Parser:       require('./lib/N3Parser'),
  Writer:       require('./lib/N3Writer'),
  Store:        require('./lib/N3Store'),
  StreamParser: require('./lib/N3StreamParser'),
  StreamWriter: require('./lib/N3StreamWriter'),
  Util:         require('./lib/N3Util'),
};
