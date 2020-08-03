function palindrome(str) {
  let arr = str.toLowerCase().match(/[a-z0-9]/gi);
  for (let i=0; i<arr.length; i++) {
    if (arr[i] != arr[arr.length-i-1]) {
      return false;
    }
  }
  return true;
}



palindrome("eye");

console.log('------------------------------------------------------------')
console.log(palindrome("eye"), true);
console.log(palindrome("My age is 0, 0 si ega ym."), true);
console.log(palindrome("0_0 (: /-\ :) 0-0"), true);
console.log(palindrome("five|\_/|four"), false);