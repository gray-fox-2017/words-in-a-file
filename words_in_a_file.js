//var sys = require('sys');
const fs = require('fs')

function words_in_a_file(filename, limit) {
  const conjuctions = ['a','after','also','although','an','and','are','as','at','because','before','between','both','but','by','either','for','from','if','in','is','it','nor','of','on','or','so','that','the','these','though','to','was','were','which','who','whom','whose','with','yet','ref'];
  let contents = fs.readFileSync(filename,'utf8');
  let unFilteredContents = contents.match(/[a-z]+/gi);
  let arrContents = unFilteredContents.filter(key => conjuctions.indexOf(key.toLowerCase()) === -1);
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

console.log(words_in_a_file('source.txt',3));
module.exports = {
  words_in_a_file: words_in_a_file
}
