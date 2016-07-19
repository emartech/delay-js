'use strict';

class Delay {
  static wait(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
}

module.exports = Delay;
