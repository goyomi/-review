let value; //undefined, 값이 선언되어있지 않다

// 존재하지만 값이나 자료형이 존재하지 않는 경우
var value2 = null;
console.log(value2); // null
// 빈 값에는 널을 넣어라~ 아래는 참고만

let 반점수 = [10, 20, 30, null, 40, 50]
let 반평균 = 0
for (const i of 반점수) {
  console.log(i)
  반평균 += i
}
