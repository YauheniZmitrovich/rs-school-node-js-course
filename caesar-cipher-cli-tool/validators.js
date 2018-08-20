const fs = require("fs");

const validateShift = (shift) => {
  if (!shift) {
    console.error("Mandatory option -s (--shift) has been missed");
    process.exit(1);
  } else if (!Number.isInteger(+shift)) {
    console.error(`The shift ${shift} is invalid. Use an integer value.`);
    process.exit(1);
  }
};

const validateAction = (action) => {
  if (!action) {
    console.error("Mandatory option -a (--action) has been missed");
    process.exit(1);
  } else if (action !== "encode" && action !== "decode") {
    console.error(
      `The action ${action} is invalid. Use "encode" or "decode" value`
    );
    process.exit(1);
  }
};

const validateFilePath = (path) => {
  if (!fs.existsSync(path)) {
    console.error(`The file path ${path} is invalid`);
    process.exit(1);
  }
};

module.exports = {
  validateOptions: ({ shift, action, input, output }) => {
    validateShift(shift);
    validateAction(action);

    input && validateFilePath(input);
    output && validateFilePath(output);
  },
};
