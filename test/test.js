require("babel-polyfill");
var plugin = require("../lib/stylename-transform");

require("babel-core/register")({
  presets: ["babel-preset-react", "es2015"],
  plugins: [plugin],
  cache: false
});


require("./test/basic");
