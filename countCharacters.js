function countCharacters(word) {
    if (typeof word !== 'string') {
        throw new Error('Input must be a string');
    }
    return word.length;
}

module.exports = countCharacters;