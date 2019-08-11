
const anagram = require('../src/anagram');

describe('Anagram module', () => {
    test('Anagram is a function', () => {
        expect(typeof anagram.filterAnagram).toEqual('function');
    });

    test('return value of the filterAnagram', () => {
        const mookAnagrams = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

        const response = [
            [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ]
        ];

        expect(response).toMatchObject(anagram.filterAnagram(mookAnagrams));
    });

    test('return value of the filterAnagram', () => {
        const mookAnagrams = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

        const response = [
            [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ]
        ];

        expect(response).not.toMatchObject(anagram.filterAnagram(mookAnagrams));
    });
});