const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('mammoth hill', () => {
        it('should return expected value if distance >= kPoint', () => {
            const actual = calculateDistancePoints(227.5, 225, 200);

            const expected = '153'

            assert.equal(actual, expected);
        });

        it('should return expected value if distance =< kPoint', () => {
            const actual = calculateDistancePoints(179.5, 225, 200);

            const expected = '95.4'

            assert.equal(actual, expected);
        });
    });

    describe('big hill', () => {
        it('should return expected value if distance >= kPoint', () => {
            const actual = calculateDistancePoints(134, 134, 120);

            const expected = '85.2'

            assert.equal(actual, expected);
        });

        it('should return expected value if distance =< kPoint', () => {
            const actual = calculateDistancePoints(113, 134, 120);

            const expected = '47.4'

            assert.equal(actual, expected);
        });
    });

    describe('normal hill', () => {
        it('should return expected value if distance >= kPoint', () => {
            const actual = calculateDistancePoints(111, 109, 98);

            const expected = '86'

            assert.equal(actual, expected);
        });

        it('should return expected value if distance =< kPoint', () => {
            const actual = calculateDistancePoints(93.5, 109, 98);

            const expected = '51.0'

            assert.equal(actual, expected);
        });
    });
});