/*

URL: https://leetcode.com/problems/valid-anagram/description/

242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

 
Constraints:

	1 <= s.length, t.length <= 5 * 104
	s and t consist of lowercase English letters.

 
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/


// Bruteforce Approach
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var isAnagram = function(s, t) {
    // check if length are not same
    // return false
    if(s.length !== t.length) return false;

    // convert the string into arrays
    let sSortedStr = s.split('');
    let tSortedStr = t.split('');

    // sort them
    sSortedStr.sort();
    tSortedStr.sort();

    // join the array items back to sorted string
    sSortedStr = sSortedStr.join('');
    tSortedStr = tSortedStr.join('');

    // primitives are compared by value
    // return true if value is same or return false
    return sSortedStr === tSortedStr;

}


// Hashmap Approach
// Using Hashmap
var isAnagram = function(s, t) {

    // if len is not same return false;
    if(s.length !== t.length) return false;


    // create char counter of s & t
    // iterate through sCounter and check if count value
    // is same inside of tCounter


    const sMap = new Map();
    const tMap = new Map();

    for(let char of s){
        if(!sMap.has(char)) sMap.set(char, 1);
        sMap.set(char, sMap.get(char) + 1)
    }

    for(let char of t){
        if(!tMap.has(char)) tMap.set(char, 1);
        tMap.set(char, tMap.get(char) + 1)
    }



    for(let [key, val] of sMap) {
        console.log(key, 'key')
        if(sMap.get(key) !== tMap.get(key)) return false
    }

    return true;
}


// Bruteforce Approach that has a bug
// Bruteforce approach
// var isAnagram = function(s, t) {
//     // if length of s & t are not equal - return false
//     if(s.length !== t.length) return false;

//     // convert the s & t into arrays
//     const sArr = s.split('');
//     const tArr = t.split('');

//     // iterate over the t, select one item at a time say x
//     // iterate over the s inside of the t
//         // check if x is inside of s, if yes? remove the found item from array s
//         // if not inside of s, return immediate false
//     // keep iteration
//     // check if array s is of length 0, if yes return true
//     // or else return false

//     for(let currentItem of tArr){
//         for(let i = 0; i < sArr.length; i++) {
//             if(sArr[i] === currentItem) {
//                 sArr.splice(i, 1);
//             }
//         }
//         if(tArr.length === sArr.length) return false;
//     }
//     console.log(sArr, tArr.length);
//     return sArr.length === 0;
// };
