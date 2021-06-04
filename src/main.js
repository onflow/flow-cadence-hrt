import path from "path"
import toml from "toml";
import fs from "fs";
import "colors";
import Handlebars from "handlebars";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import { underscoreToCamelCase } from "flow-cadut";
import "../templates";
import prepareTests from "./prepare"

const fixJSON = (json) => JSON.parse(JSON.stringify(json));

const pretty = (code) => {
  const options = {
    printWidth: 100,
    endOfLine: "lf",
    semi: true,
    useTabs: false,
    singleQuote: false,
    trailingComma: "es5",
    tabWidth: 4,
  };
  return prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel],
    ...options,
  });
};

const capitalize = (text) => text[0].toUpperCase() + text.slice(1);
const printTests = (tests) => {
  for (const key of tests) {
    console.log(`${key.name}: `.padEnd(80, "-").bold.red);
    if (key.deploy) {
      console.log(`\tDeploy: ${key.deploy}`.blue);
    }
    printInteractions(key.interactions);
  }
};

const printArguments = (args) => {
  if (args) {
    console.log(`\t\tWith Arguments: ${JSON.stringify(args)}`.yellow);
  }
};
const printTransaction = (tx) => {
  console.log(`\tSend Transaction: "${tx.name}"`.bold.yellow);
  printArguments(tx.args);
  console.log(`\t\tSigned by: ${tx.signers}`.yellow);
};
const printScript = (script) => {
  console.log(`\tExecute Script: "${script.name}"`.bold.magenta);
  printArguments(script.args);
  console.log(`\t\tExpected Result: "${script.expect}"`.bold.yellow);
};
const printInteractions = (interactions) => {
  for (const ix of interactions) {
    if (ix.type === "transaction") {
      printTransaction(ix);
    }
    if (ix.type === "script") {
      printScript(ix);
    }
  }
};
const colorCode = (code) => {
  const YLW = "\x1b[33m"; // yellow
  const MGN = "\x1b[35m"; // magenta
  const GRN = "\x1b[32m"; // green
  const RED = "\x1b[31m"; //red
  const DIM = "\x1b[2m";

  // reset color`
  const RC = `\x1b[0m`;

  return (
    code
      .replace(/describe\(.*/g, "$&".yellow)
      .replace(/test\(.*/g, "$&".yellow)
      .replace(/^test\(("[\w\s]*")/g, "$1".bold.yellow)
      .replace(/deployContractByName/g, "$&".magenta)
      .replace(/shallRevert/g, "$&".red)
      .replace(/shallResolve/g, "$&".green)
      .replace(/shallPass/g, "$&".green)
      .replace(/\/\/ Deploy Contracts/g, "$&".gray)
      // .replace(/await/g, "$&".gray)
      // .replace(/const/g, "$&".gray)
      .replace(/}\);/g, "$&".yellow)
  );
};

export const run = (args) => {
  const [fileName] = args.slice(2);
  const filePath = path.resolve(__dirname, fileName)
  try {
    const file = fs.readFileSync(filePath);
    const parsed = toml.parse(file);
    const fixed = fixJSON(parsed);

    console.log(colorCode(prepareTests(fixed, "suit")));
  } catch (e) {
    console.log(e);
        console.error(
      "Parsing error on line " +
        e.line +
        ", column " +
        e.column +
        ": " +
        e.message
    );
  }
};
