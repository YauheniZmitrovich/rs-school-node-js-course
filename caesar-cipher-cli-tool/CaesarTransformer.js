const { Stream } = require("stream");

class CaesarTransformer extends Stream.Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = shift;
  }

  _transform(data, encoding, callback) {
    this.push(this.action(data.toString(), this.shift));
    callback();
  }
}

module.exports = CaesarTransformer;
