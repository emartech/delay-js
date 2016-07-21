'use strict';

const Delay = require('./');

describe('Delay', () => {

  describe('#wait', () => {
    it('should resolve after the given time', function*() {
      this.sandbox.stub(global, 'setTimeout').yields();

      const waitPromise = Delay.wait(1000);

      expect(global.setTimeout).to.have.been.calledWith(this.sinon.match.func, 1000);
      yield waitPromise;
    });

    it('should resolve with the given value', function*() {
      this.sandbox.stub(global, 'setTimeout').yields();

      const waitPromise = Delay.wait(1000, 'test string value');

      const result = yield waitPromise;
      expect(result).to.eql('test string value');
    });
  });

});
