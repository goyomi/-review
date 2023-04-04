// 함수의 일반적인 형태
// a, b: 파라미터 ????: 아규먼트
// 파선아실은뭐야...
function one(a, b){ // 1
  let z = a + b     // 2
  return z **2      // 3
}

console.log(one(7, 3))
console.log(one(7, 3))

// 화살표 함수
const two = (a, b) => (a + b)**2
console.log(two(7, 3))
console.log(two(7, 3))

// 이름 없이 선언하는 함수 
function three(a, b){ // 1
  let z = a + b     // 2
  return z **2      // 3
}

console.log(three(7, 3))
console.log(three(7, 3))

// 콜백함수: 함수의 이름을 전달해줄 수 있음
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄 께 하는 것 
function four(a, b, c){
  let z = c(a, b) + c(a, b)
  return z * 2
}

four(7, 3, one)