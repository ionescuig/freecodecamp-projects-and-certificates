function rot13(str) {
  let arr = str.split('');
  for (let i=0; i< arr.length; i++) {
    if (65 <= arr[i].charCodeAt(0) && arr[i].charCodeAt(0) <= 90) {
      if (arr[i].charCodeAt(0) < 78) {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 13);
      } else {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 13);
      }
    }
  }
  return arr.join('');
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"))