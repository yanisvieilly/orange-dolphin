const fs = require("fs");

const words = fs
  .readFileSync("liste.de.mots.francais.frgut.txt")
  .toString()
  .split("\r\n");

const results = [];

words.forEach((sourceWord, i) => {
  const anagrams = words.slice(i).filter((targetWord) => {
    if (sourceWord === targetWord || sourceWord.length !== targetWord.length) {
      return false;
    }

    for (let i = 0; i < sourceWord.length; i++) {
      if (!targetWord.includes(sourceWord[i])) {
        return false;
      }
    }

    for (let i = 0; i < targetWord.length; i++) {
      if (!sourceWord.includes(targetWord[i])) {
        return false;
      }
    }

    return true;
  });

  if (!anagrams.length) {
    return;
  }

  anagrams.push(sourceWord);

  results.push(anagrams);
});

console.log(results);
