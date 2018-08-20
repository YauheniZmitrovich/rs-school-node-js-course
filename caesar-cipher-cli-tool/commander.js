const commander = require("commander");

const program = new commander.Command('caesar-cipher-cli');

program
  .description("CLI tool that will encode and decode a text by Caesar cipher")
  .storeOptionsAsProperties(false)
  .passCommandToAction(false);
program
  .option("-s, --shift <number>", "shift")
  .option("-i, --input <path>", "input file")
  .option("-o, --output <path>", "output file")
  .option("-a, --action <type>", "action encode/decode");

program.parse(process.argv);
const programOptions = program.opts();

module.exports = {
  programOptions,
};
