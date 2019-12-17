const hasRepeating = (s: string) => {
  for (let j = 0; j <= s.length - 2; j++) {
    if (s[j] === s[j + 1]) {
      return true;
    }
  }
  return false;
};

const isIncreasing = (s: string) => {
  for (let j = 0; j <= s.length - 2; j++) {
    /*
    console.log(s[j]);
    console.log(s[j + 1]);
    console.log(s[j + 1] < s[j]);
     */
    if (s[j + 1] < s[j]) {
      return false;
    }
  }
  return true;
};

// 012345
const anotherOne = (s: string) => {
  // check first two digits
  let isGood = false;
  if (s[0] == s[1] && s[0] != s[2]) {
    isGood = true;
  }
  // check middle
  for (let i = 1; i < 5; i++) {
    if (s[i] == s[i + 1] && s[i] != s[i - 1] && s[i] != s[i + 2]) {
      isGood = true;
    }
  }

  // check last
  if (s[5] == s[4] && s[5] != s[3]) {
    isGood = true;
  }
  return isGood;
  /*
  let isGood = false;
  for (let j = 0; j <= s.length - 2; j++) {
    if (s[j] == s[j + 1]) {
      isGood = true;
      // check the one after
      if (j + 2 < s.length && s[j] == s[j + 2]) {
        isGood = false;
        j++;
      }
      if (j - 1 >= 0 && s[j] == s[j - 1]) {
        isGood = false;
      }
    }
  }
  return isGood;
   */
};

const test = (i: number) => {
  const s: string = i.toString();
  if (s.length !== 6) {
    return false;
  }
  /*
  if (!hasRepeating(s)) {
    return false;
  }
   */
  if (!anotherOne(s)) {
    return false;
  }

  return isIncreasing(s);

};

console.log(test(123444) == false);
console.log(test(111111) == false);
console.log(test(223450) == false);
console.log(test(123789) == false);
console.log(test(113789) == true);

console.log(test(112233) == true);
console.log(test(111122) == true);

console.log(test(588889) == false);
console.log(test(333456) == false);


/*
console.log(test(123788));
console.log(hasRepeating('123788'));
console.log(isIncreasing('123788'));
 */

let num = 0;
for (let i = 156218; i <= 652527; i++) {
  if (test(i)) {
    console.log(i);
    num++;
  }
}

console.log('num:', num);
