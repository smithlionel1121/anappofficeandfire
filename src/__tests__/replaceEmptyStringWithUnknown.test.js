const replaceEmptyStringWithUnknown = require('../utils/replaceEmptyStringWithUnknown');

describe('replaceEmptyStringWithUnknown', () => {
    test('when passed a string, returns that string"', () => {
        expect(replaceEmptyStringWithUnknown('Jon Snow')).toBe('Jon Snow')
    });
    test('when passed an empty string, returns "Unknown"', () => {
        expect(replaceEmptyStringWithUnknown('')).toBe('Unknown');
    })
});