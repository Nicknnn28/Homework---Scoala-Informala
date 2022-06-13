"use strict";

//Question 6

(function qst6() {
  const sumOfNums = (numbers) => {
    if (numbers.length === 0) return 0;
    else {
      let sum = 0;
      for (let i in numbers) {
        sum += numbers[i];
      }
      return sum;
    }
  };

  const numsQst6 = sumOfNums([10, 20, 30]);
  console.log(`sumOfNums: ${numsQst6}`);
})();

//Question 7

(function qst7() {
  const numsGreaterThanTen = (numbers) => {
    const arr = [];
    if (numbers.length === 0) return 0;
    else {
      for (let i in numbers) {
        if (numbers[i] > 10) arr.push(numbers[i]);
      }
      return arr;
    }
  };

  const numsQst7 = numsGreaterThanTen([2, 5, 7, 10, 25, 50, 82]);
  console.log(`numsGreaterThanTen: ${numsQst7}`);
})();

//Question 8

(function qst8() {
  const allStartingWithA = (stringArr) => {
    if (stringArr.length === 0) return true;
    else {
      for (let i in stringArr) {
        if (stringArr[i][0] !== "A" && stringArr[i][0] !== "a") return false;
      }
      return true;
    }
  };

  const arrStr = allStartingWithA(["A", "a", "aA", "Aa", "Ab"]);
  console.log(`allStartingWithA: ${arrStr}`);
})();

//Question 9

(function qst9() {
  const hasAtLeastNVowels = (word, n) => {
    if (n < 0) return null;
    else {
      const vowels = ["a", "e", "i", "o", "u"];
      let countV = 0;

      for (let i in word) {
        for (let j in vowels) if (word[i] === vowels[j]) countV++;
      }
      if (countV >= n) return true;
      else return false;
    }
  };
  const hasV = hasAtLeastNVowels("JavaScript", 2);
  console.log(`hasAtLeastNVowels: ${hasV}`);
})();

//Question 10

(function qst10() {
  const buildObjectFromWords = (words) => {
    const obj = {};
    for (let i in words) {
      obj[words[i]] = words[i].length;
    }

    return obj;
  };
  const object = buildObjectFromWords(["cat", "horse", "elephant"]);
  console.log("buildObjectFromWords:", object);
})();
