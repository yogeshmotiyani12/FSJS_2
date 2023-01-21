// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let arr = ['snapchat', 'instagram', 'pw skills', 'instagram', 'youtube', 'pw skills' ,'metflix'];

console.log(arr.lastIndexOf('pw skills'));  // last occurence 5


let arr1 = (arr.length -1) - arr.reverse().lastIndexOf("pw skills");

console.log(arr1) // first occurence 2

