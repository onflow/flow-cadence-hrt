// Set options as a parameter, environment variable, or rc file.
module.exports = require("esm")(module /*, options*/)("./src/main-yaml").run(process.argv);