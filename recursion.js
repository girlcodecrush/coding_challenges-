/*
"util.getObjectById" 메소드를 작성합니다.

spec/recursion.data.js 파일을 확인해 보면, TREE_DATA 라는 JSON 형태의 데이터가 있습니다.
getObjectById 함수는, TREE_DATA.items와 같이, 객체로 구성된 배열 안에서, 인자로 넘기는 특정 id값을 가지고 있는 객체를 찾아 리턴합니다.
이 때 객체는 children이라는 키 값에 자식 노드를 가질 수 있으며, recursion을 통해서 부모 뿐만이 아닌, 자식 노드 중에서도 id값을 가진 객체가 있는지를 찾아내야 합니다.

Notes:
* recursion을 사용할 때, getObjectById 함수 안에서 util.getObjectById 를 호출해야 합니다.

var output = util.getObjectById(TREE_DATA.items, '1'));
console.log(output); // --> { "id": "1", "name": "johnny" }
*/

var util = {
  prop: null ,    // intentionally,set as an absence of an obj value
  getObjectById: function getObjectById(json, id) {    //json = TREE_DATA.items ; id = value (in this question, liks "1")
    // your code here
    for(var i=0 ; i < json.length ; i++){    
      if(json[i]["id"]=== id){           // the prop value required to be strictly identical with the second argument,id
        this.prop = json[i];  
          return json[i] ;
                   
      } else if(json[i].hasOwnProperty("children")){
        return util.getObjectById(json[i]["children"], id) ;
      }   
    } 
  } 
};

// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = util;
}