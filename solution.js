var makeFancyString = function(s) {
    let result = '';  // String to store result
    let count = 1;    // Start with 1 for the first character

    // Start from the second character, comparing it to the previous one
    for (let i = 1; i < s.length; i++) {
        // Check if the current character is the same as the previous
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;  // Reset count if it's a new character
        }

        // Append the character if it doesn't form a triplet
        if (count < 3) {
            result += s[i];
        }
    }

    // Prepend the first character, which is always part of the result
    return s[0] + result;
};
