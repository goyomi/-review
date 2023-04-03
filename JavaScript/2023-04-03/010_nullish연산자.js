// 헷갈리는 연산 모음
// 추가된지 얼마 안되는 연산자. 구식브라우저는 폴리필(최신문법을 구식브라우저에서도 사용할 수 있도록 해주는 것)이 필요하다.
// https://ko.javascript.info/nullish-coalescing-operator
// null을 확인하기 위한 연산자

let firstName = null;
let latsName = null;
let nickName = 'goyomi';

console.log(firstName ?? nickName) 
console.log(firstName ?? nickName ?? nickName)
console.log(firstName ?? nickName ?? '익명 사용자')
// ??는 nullish 연산자 

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c) // 10
// null이 나오면 다음값으로 넘기다가 null 값이 아니면 출력

// 단락회로평가와 nullish 연산자의 차이점
let height = 0;
console.log(height || 100) // 100
console.log(height ?? 100) // 0

let height2
console.log(height2 || 100)
console.log(height2 ?? 100)

let height3 = '';
console.log(height3 || 'hello')
console.log(height3 ?? 'world')

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined