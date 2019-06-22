const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('notes', () => {
        it('should return expected value if all notes are different', () => {
            const actual = calculateStylePoints(18.0, 18.5, 17.5, 16.5, 19.5);

            const expected = '54'

            assert.equal(actual, expected);
        });

        it('should return expected value if all notes are same', () => {
            const actual = calculateStylePoints(18.5, 18.5, 18.5, 18.5, 18.5);

            const expected = '55.5'

            assert.equal(actual, expected);
        });

        it('should return expected value if all notes are missing', () => {
            const actual = calculateStylePoints(18.5, 19.5, 16.5);

            const expected = '54.5'

            assert.equal(actual, expected);
        });

        it('should return expected value if 3 of notes are 0', () => {
            const actual = calculateStylePoints(18.5, 19.5, 0, 0, 0);

            const expected = '18.5'

            assert.equal(actual, expected);
        });
    });
});