// 1. String Length
function stringLength(str) {
    return str.length;
}

function middleCharacter(str) {
    return str[Math.floor(str.length / 2)];
}

// 2. String Comparison
function compareStrings(str1, str2) {
    return str1 > str2;
}

function firstCharCode(str) {
    return str.charCodeAt(0);
}

// 3. String Iteration
function logCharacters(str) {
    for (let char of str) {
        console.log(char);
    }
}

function stringToArray(str) {
    return str.split("");
}

// 4. Slicing and Substring
function substringBetweenIndices(str, startIndex, endIndex) {
    return str.substring(startIndex, endIndex);
}

function lastWord(str) {
    const words = str.split(" ");
    return words[words.length - 1];
}

// 5. Uppercase and Lowercase
function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

// 6. Replacing Text
function replaceText(str, oldValue, newValue) {
    return str.replace(oldValue, newValue);
}

function removeWord(str, word) {
    return str.replace(new RegExp(word, "g"), "");
}

// 7. Concatenation
function concatenateStrings(str1, str2) {
    return str1 + str2;
}

function concatenateArrayStrings(arr) {
    return arr.join("");
}

// 8. Trimming Whitespace
function trimWhitespace(str) {
    return str.trim();
}

function trimLeadingWhitespace(str) {
    return str.replace(/^\s+/, "");
}

// 9. Padding
function padWithZeros(str, targetLength) {
    return str.padStart(targetLength, "0");
}

function padWithChar(str, targetLength, char) {
    return str.padEnd(targetLength, char);
}

// 10. Accessing Characters
function characterAtIndex(str, index) {
    return str[index];
}

function charCodeAtIndex(str, index) {
    return str.charCodeAt(index);
}

// 11. Repetition
function repeatString(str, times) {
    return str.repeat(times);
}

function repeatCharacter(char, times) {
    return char.repeat(times);
}

// 12. Splitting into an Array
function splitBySeparator(str, separator) {
    return str.split(separator);
}

function splitBySeparatorWithLimit(str, separator, limit) {
    return str.split(separator, limit);
}

// 13. Checking Substring Presence
function startsWithSubstring(str, substring) {
    return str.startsWith(substring);
}

function endsWithSubstring(str, substring) {
    return str.endsWith(substring);
}

function includesSubstring(str, substring) {
    return str.includes(substring);
}
