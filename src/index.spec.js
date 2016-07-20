'use strict';

const Delay = require('./');

describe('Delay', () => {

  describe('#wait', () => {
    it('should resolve after the given time', function() {
      this.sandbox.stub(global, 'setTimeout').yields();

      const waitPromise = Delay.wait(1000);

      expect(global.setTimeout).to.have.been.calledWith(this.sinon.match.func, 1000);
      return waitPromise;
    });
  });

});
