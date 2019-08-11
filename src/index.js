const anagram = require('./anagram');

const arrAnagrams = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const response = anagram.filterAnagram(arrAnagrams);

console.log(response);