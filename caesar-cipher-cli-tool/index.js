const { pipeline } = require("stream");

const { programOptions } = require("./commander");
const { validateOptions } = require("./validators");
const { buildStreams } = require("./streamsBuilder");

validateOptions(programOptions);

const { readStream, transformStream, writeStream } = buildStreams(
  programOptions
);

pipeline(readStream, transformStream, writeStream, (err) => {
  if (err) {
    process.stderr.write(`Something went wrong. Please try again. ${err}`);
    process.exit(1);
  }
});
