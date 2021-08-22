/*
   Example: 2
   Q. Given two strings, write a function to determine if the second string is and anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of the another such as cinema formed by iceman.

   Like: 
        validAnagram("", ""); // true
        validAnagram("aaz", "zza"); // false
        validAnagram("qwerty", "qeywrt"); // true
*/

function validAnagram(first, second) {
    if (first.length !== second.length) return false;

    let lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram("pmmmmmm", "mmmmmmp"));