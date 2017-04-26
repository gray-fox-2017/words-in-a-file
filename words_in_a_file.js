var sys = require('sys');
const fs = require('fs')

// actual conversion code starts here
function words_in_a_file(filename, limit) {
  let contents = fs.readFileSync(filename).toString();
  let arrContents = contents.match(/[a-z]+/gi);
  let countWords = {};
  arrContents.forEach(key => {
    (!countWords[key]) ? countWords[key] = 1 : countWords[key] += 1;
  });

}

console.log(words_in_a_file('source.txt',3));
module.exports = {
  words_in_a_file: words_in_a_file
}
