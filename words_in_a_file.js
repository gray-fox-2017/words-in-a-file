//var sys = require('sys');
const fs = require('fs')

function words_in_a_file(filename, limit) {
  let contents = fs.readFileSync(filename).toString();
  let arrContents = contents.match(/[a-z]+/gi);
  let countWords = {};
  let result = "";

  // count occurences for each word
  arrContents.map(key => {
    (!countWords.hasOwnProperty(key)) ? countWords[key] = 1 : countWords[key] += 1;
  });

  // sort the occurences
  let arrCountWords = Object.keys(countWords).map(key => {
    return {
      word: key,
      total: countWords[key]
    }
  });
  arrCountWords.sort((a,b) => b.total-a.total);

  // print the result
  for (let i=0; i<limit; i++) {
    result += "\'"+arrCountWords[i].word+"\': "+arrCountWords[i].total+" occurences\n";
    //console.log(arrCountWords[i].word);
    //console.log(arrCountWords[i].total);
    //result[arrCountWords[i].word] = arrCountWords[i].total;
  }

  return result;

}

console.log(words_in_a_file('source.txt',30));
module.exports = {
  words_in_a_file: words_in_a_file
}
