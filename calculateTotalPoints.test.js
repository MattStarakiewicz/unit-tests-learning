const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('sum of points', () => {
        it('should return expected value', () => {
            const actual = calculateTotalPoints(227.5, 225, 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);

            const expected = '208.3'

            assert.equal(actual, expected);
        });
    });

    describe('sum of points', () => {
        it('should return expected value if gate factor are missing', () => {
            const actual = calculateTotalPoints(227.5, 225, 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4);

            const expected = '199.6'

            assert.equal(actual, expected);
        });
    });
});