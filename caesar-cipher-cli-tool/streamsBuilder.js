const fs = require("fs");

const { encode, decode } = require("./caesarCipher");
const CaesarTransformer = require("./CaesarTransformer");

const buildStreams = ({ input, output, action, shift }) => {
  const readStream = input ? fs.createReadStream(input, "utf8") : process.stdin;

  const writeStream = output
    ? fs.createWriteStream(output, {
        flags: "a",
      })
    : process.stdout;

  const transformAction = action === "encode" ? encode : decode;
  const transformStream = new CaesarTransformer(transformAction, +shift);

  return { readStream, transformStream, writeStream };
};

module.exports = {
  buildStreams,
};
