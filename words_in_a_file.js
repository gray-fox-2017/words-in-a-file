var sys = require('sys');
const fs = require('fs')

// actual conversion code starts here
function words_in_a_file(filename, limit) {
  let contents = fs.readFileSync(filename).toString();
  let arrContents = contents.match(/[a-z]+/gi);
  let countWords = {};

  /*
  arrContents.map(key => {
    (!countWords.hasOwnProperty(key)) ? countWords[key] = 1 : countWords[key] += 1;
  });
  let arrCountWords = Object.keys(countWords).map(key => {
    return {
      word: key,
      total: countWords[key]
    }
  });
  arrCountWords.sort((a,b) => b.total-a.total);*/


}

console.log(words_in_a_file('source.txt',3));
module.exports = {
  words_in_a_file: words_in_a_file
}
