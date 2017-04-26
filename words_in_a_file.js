//var sys = require('sys');
const fs = require('fs')
const conj = ['a','the','an','is','of','was','were','from','to','both','either','nor','as','these','which','with','who','whose','whom','on','at','are','in','it','also','between','for','and','nor','but','or','yet','so','after','although','if','because','before','by','in','that','though'];

function isLetter(str) {
  return str.match(/(\d)|(\W)/gi) === null;
}
function isNotConj(str) {
  return conj.indexOf(str) === -1;
}

// actual conversion code starts here
function words_in_a_file(source = 'source.txt', limit=3) {
    let allData = fs.readFileSync(source,'utf8')
    let aAllData = allData.toLowerCase().split(' ').filter(isLetter).filter(isNotConj);
    let unique = aAllData.filter((v,i,a)=>a.indexOf(v)=== i );
    let strAAllData = ' '+aAllData.join(' ')+' ';
    let temp = [];

    unique.forEach((x)=> {
      let search = ''+x+'';
      search = new RegExp('\\s+('+search+')+\\s','gi');
      temp.push([strAAllData.match(search).length,x]);
    });
    
    temp = temp.sort((a,b)=> parseInt(b[0])-parseInt(a[0]));
    for (let i = 0; i<limit; i++) {
      console.log(`'${temp[i][1]}' : ${temp[i][0]} occurences`);
    }
}

words_in_a_file();
module.exports = {
  words_in_a_file: words_in_a_file
}
