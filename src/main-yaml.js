import path from "path";
import toml from "toml";
import yaml from "yaml";
import fs from "fs";
import "colors";
import Handlebars from "handlebars";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import { underscoreToCamelCase } from "flow-cadut";
import "../templates";
import prepareTests from "./prepare";

const fixJSON = (json) => JSON.parse(JSON.stringify(json));

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
  const filePath = path.resolve(__dirname, fileName);
  try {
    const file = fs.readFileSync(filePath, 'utf8');
    const parsed = yaml.parse(file);
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
