const countCharacters = require('./countCharacters');

describe('countCharacters', () => {
    test('should return the correct number of characters for a non-empty string', () => {
        expect(countCharacters("hello")).toBe(5);
        expect(countCharacters("JavaScript")).toBe(10);
    });

    test('should return 0 for an empty string', () => {
        expect(countCharacters("")).toBe(0);
    });

    test('should handle strings with spaces and special characters', () => {
        expect(countCharacters(" ")).toBe(1);
        expect(countCharacters("Hello, world!")).toBe(13);
        expect(countCharacters("Привет!")).toBe(7); // Кириллица
    });

    test('should throw an error if input is not a string', () => {
        expect(() => countCharacters(123)).toThrow('Input must be a string');
        expect(() => countCharacters(null)).toThrow('Input must be a string');
        expect(() => countCharacters(undefined)).toThrow('Input must be a string');
        expect(() => countCharacters({})).toThrow('Input must be a string');
    });
});