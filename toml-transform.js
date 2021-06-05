const babel = require("@babel/core");
const toml = require("toml");
const prepareTests = require("./src/prepare");

const fixJSON = (json) => JSON.parse(JSON.stringify(json));

module.exports = {
  process(src) {
    const parsed = toml.parse(src);
    const fixed = fixJSON(parsed);
    const tests = prepareTests(fixed, "suit");
    
    const options = {
      babelrc: false,
      compact: false,
      plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
    };

    return babel.transform(tests, options).code;
  },
};
