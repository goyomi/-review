let x = 5;
let y = 10;

console.log(x > y); // false

// true, false 값을 and, or 연산했을 경우 반환값은 ture, false
let a = ture;
let b = false;

console.log(a && b); // and

// true, false 값을 and, or 연산했을 경우 단락회로평가를 하게 된다.
let a2 = 'hello';
let b2 = '';

console.log(a2 && b2);

// 별표 ****
console.log(Boolean('hello')) // t, 문자만 있으면 트루
console.log(Boolean('')) // f, 빈문자는 false
console.log(Boolean([1, 2, 3])) // t
console.log(Boolean([])) // t(말도안되게), 그냥 외워야됨
console.log(Boolean({'one':10, 'two':20}))// t
console.log(Boolean({})) // t
console.log(Boolean(0)) // f 
console.log(Boolean(-1)) // t
console.log(Boolean(undefined)) //f
console.log(Boolean(null)) //f
console.log(Boolean(NaN)) // f

if (undefined){
  console.log('hello')
} 
// 안찍힘 undefined는 f 이기 때문에

let aa;
if (aa){
  console.log('hello')
}

// hello가 찍힐지 대답할 수 있어야 견고한 코드를 짤 수 있다.
// 견고한 코드: 어떠한 상황에서도 기능이 무너지지 않는 코드 
let aaa;
if (aaa > 100){
  console.log('hello')
}