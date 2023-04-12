// 익명 즉시 실행 함수
(function () {
  let a = 1;
  let b = 2;
  return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
}());

(function foo() {
  let a =
})


// foo() 이렇게 못부름 (밖으로 빠져나올 수 없음)

// 이런 함수가 어디서 쓰일까요?
// 1. 메모리 효율적으로 관리하기 위해 
// 2. 바로 실행해야 하는 것들을 즉시 실행함수로 관리

// 모든 요소들이 로드된 이후에 실행, 함수는 1개만 실행 가능
// window.onload = function(){}
// $(document).ready() // 위와 같은 기능을 하는 jquery 문법


let test1 = [10, 20, 30]
let test2 = 100

// 많이 헷갈려 하기 때문에 꼭 기억하기
function 값변경1(arr) {
  arr[0] = 100
}
값변경1(test1)
console.log(test1)

function 값변경2(value) {
  value = 1000
}

값변경1(test2)
console.log(test2)

