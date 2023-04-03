// 변수값이 할당되지 않은 경우를 말함 

let a;
console.log(a); //undefined

if (typeof a === "undefined") {
  console.log('a에 아무것도 할당되지 않았습니다!')
}

// 위의 if 식을 줄여서 아래처럼 나타낼 수도 있다!
if (!a) {
  console.log('a에 아무것도 할당되지 않았습니다!')
}