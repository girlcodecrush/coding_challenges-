/*
"_.some" 메소드를 작성합니다.

underbar의 기능 중 하나인, some 메소드를 작성합니다.
배열의 element 중 단 하나라도 테스트 함수, 즉 iterator의 조건을 통과하는지 여부를 파악합니다.
만일 iterator 함수가 주어지지 않을 경우, 각각의 element 중 하나라도 truthy한 경우 true를 리턴합니다.

var isEven = function(number) {
  return number % 2 === 0;
};

var output = _.some([1, 10, 29], isEven);
console.log(output); // --> true
*/

var _ = {};
_.some = function(collection, iterator) {
  // your code here
  for(var i = 0; i < collection.length ; i++) {
    if(iterator && iterator(collection[i])) {
        return true;
    } else if(!iterator && collection[i]) { 
      return true;
    }
 } 
   
  //else if(iterator(collection)){
    //  return true; 
  
    return false; 

};

// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = _;
}