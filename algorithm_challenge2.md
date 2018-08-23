Q. 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 배열 arr에서 제거 되고 남은 수들을 return 하는 solution 함수를 완성해 주세요. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
예를들면

- arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
- arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

**<u>correct answer_1</u>**

function solution(arr){
    var answer = [];
    for(var i=0 ; i<=arr.length ; i++) {
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]); 
        }
    }
    return answer;
}

**<u>correct answer_2:</u>**

function solution(arr) {                    
    var answer = arr.filter(function(ele, index) {             
        return ele !== arr[index + 1] ;                                          
    });                                                           

return answer;                                               

}    
 console.log(solution([4,4,4,3,3]));  
VM36216:6 (2) [4, 3]

** more simple >>

function solution(arr){

   return arr.filter((ele, index) => ele !== arr[index + 1]) ;

}



**!!** The code below passed all sample tests(correct outputs produced), but in terms of accuracy and efficiency, didn't pass - hence, FAILED

function solution(arr){
    var answer = [];
    for(var i=0 ; i<arr.length ; i++) {
        if(arr[i] === arr[i+1]){
            answer.push(arr[i+1]); 
            arr.shift();           
        }
        if (arr[i] !== arr[i+1] && !answer.includes(arr[i])){
             answer.push(arr[i]);
        } 
    }
    return answer;
}


