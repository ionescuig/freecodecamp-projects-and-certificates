function telephoneCheck(str) {
  console.log('\n' + str)
  let arr = str.match(/(?![\d-\s()])/g);
  let test = str.match(/\d/g)
  console.log(str, arr)

  if (str.match(/(?![\d-\s()])/g).length > 1) {
    return false;
  }

  if (str.match(/[)]/g)) {
    if (str.match(/[(]/g)) {
      if (str.match(/[(]/g).length != str.match(/[)]/g).length) {
        return false;
      }
    } else return false;
  }

  if (str.match(/[(]/g)) {
    if (str.match(/[)]/g)) {
      if (str.match(/[(]/g).length != str.match(/[)]/g).length) {
        return false;
      }
    } else return false;
  }

  if (str[str.length - 1] == ')') {
    return false;
  }

  if (str.match(/\d/g).length == 10) {
    return true;
  } else if (str.match(/\d/g).length == 11) {
    if (str[0] == '1') {
      return true;
    } else return false;
  } else return false;
}

telephoneCheck("555-555-5555");


console.log('-'.repeat(25))
console.log(telephoneCheck("555-555-5555"), true);
console.log(telephoneCheck("1(555)555-5555"), true);
console.log(telephoneCheck("555-5555"), false);
console.log(telephoneCheck("1 555)555-5555"), false);
console.log(telephoneCheck("(555)5(55?)-5555"), false);
console.log(telephoneCheck("1 555)555-5555"), false);