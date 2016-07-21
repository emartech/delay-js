'use strict';

class Delay {
  static wait(timeout, value) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), timeout);
    });
  };
}

module.exports = Delay;
