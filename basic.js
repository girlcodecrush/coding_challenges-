/*
"countWords" 함수를 작성합니다.

string이 input으로 주어지면, "countWords" 함수는 주어진 문자열의 각 단어들을 키 값으로 갖고 있는 객체를 리턴합니다.
키 값과 더불어, 각 단어의 빈도수를 알아낸 후 값으로 적용합니다.

Notes:
* 만일 빈 문자열이 주어지면, 빈 객체를 리턴해야 합니다.

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(input) {
  // your code here
  if(input.length === 0){
    return {};
  }

  var arr = input.split(" "); 
  var countedWords = arr.reduce(function(allWords, word){
    if(word in allWords){
      allWords[word]++;
    }else{
      allWords[word] = 1;
    }
    return allWords;
  }, {});  
  return countedWords;
}
 //var output = countWords(input); 
 //console.log(countedWords); 


// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = countWords;
}
