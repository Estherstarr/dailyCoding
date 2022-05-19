//Create a function that takes string
//Print the reverse of that string to the console
function takeString(str) {
  str = str.split("");
  let reverseString = str.reverse().join("");
  return reverseString;
}
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPanlindrome(str2) {
  if (str2 === takeString(str2)) {
    alert(`${str2} is a panlindrome`);
  } else {
    alert("false");
  }
}
