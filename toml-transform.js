const babel = require("@babel/core");
const toml = require("toml");
const prepareTests = require("./src/prepare");

const fixJSON = (json) => JSON.parse(JSON.stringify(json));

module.exports = {
  process(src) {
    const parsed = toml.parse(src);
    const fixed = fixJSON(parsed);

    console.log(fixed);

    const tests = prepareTests(fixed);

    const options = {
      babelrc: false,
      compact: false,
      plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
    };

    const transformed = babel.transform(tests, options).code;
    return transformed
  },
};
