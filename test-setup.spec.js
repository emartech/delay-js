'use strict';

var sinon = require('sinon');

var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiSubset = require('chai-subset');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.use(chaiSubset);
chai.use(sinonChai);
global.expect = chai.expect;


beforeEach(function() {
  this.sinon = sinon;
  this.sandbox = sinon.sandbox.create();
});


afterEach(function() {
  this.sandbox.restore();
});
