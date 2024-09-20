const { expect } = require('chai');
const {describe, it} = require("mocha");
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', function () {
      expect(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when inputs are 1.4 and 1.4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return -0.5 when dividing -1.5 by 1.5', function () {
      expect(calculateNumber('DIVIDE', -1.5, 1.5), -0.5);
    });
  });
});
