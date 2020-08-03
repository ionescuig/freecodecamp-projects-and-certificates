function convertToRoman(num) {
  let arr1 = [];
  let arr2 = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  let roman = function(num, one, five, ten) {
      switch (num) {
          case 0:
          case 1:
          case 2:
          case 3:
              return one.repeat(num);
          case 4:
              return one + five;
          case 5:
          case 6:
          case 7:
          case 8:
              return five + one.repeat(num-5);
          case 9:
              return one + ten;
      }
  }

  while (num > 0) {
      arr1.push(num % 10);
      num = (num - (num % 10)) / 10;
  }

  for (let i=arr1.length-1; i>=0; i--) {
      switch (i) {
          case 3:
              arr1[i] = 'M'.repeat(arr1[i]);
              break;
          case 2:
              arr1[i] = roman(arr1[i], 'C', 'D', 'M');
              break;
          case 1:
              arr1[i] = roman(arr1[i], 'X', 'L', 'C');
              break;
          case 0:
              arr1[i] = roman(arr1[i], 'I', 'V', 'X');
              break;
      }
  }


  return arr1.reverse().join('');
}



convertToRoman(36);


console.log('-'.repeat(25))
console.log(convertToRoman(36), 36);
console.log(convertToRoman(2), 2);
console.log(convertToRoman(4), 4);
console.log(convertToRoman(1006), 1006);
console.log(convertToRoman(3999), 3999);