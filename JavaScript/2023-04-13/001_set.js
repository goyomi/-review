// set은 집합이라고 생각하면 된다.
// 집합, 합집합, 교집합, 차집합
// 실무에서는 많이 사용이 안되지만 알고리즘 문제에서는 거의 필수로 사용되는 자료형

let s = new Set('aabbcccccdd')
// 콘솔에 찍어보면 Set(4) {'a', 'b', 'c', 'd'} => 중복을 제거하는구나 

// 만약 게시판에 누가 글을썼다면
회사게시판 = ['김미정', '김미정', '김미정', '박서준', '서강준', '박서준', '조이', '미란다커']

// 문제 1 : 몇 명이 게시판이 게시물을 썼나요? (각각의 인원이 유일해야 한다)
let 게시자 = new Set(회사게시판)
게시자.size

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자) {
  console.log(i, 회사게시판.filter(e => e === i).length)
}

// 이 풀이는 매우 어렵습니다. 초급자에게 권장하지는 않습니다.
let map = new Map()
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1)
}

// 1번재 쑨회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

let map = new Map()
map.het('이호준') // undefined

map.set('이호준', 1) // 최종

// 2번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

map.set('이호준', 2) // 최종

/// set 연습 ///
let s = new Set('aabbbbcccdd')
s.size
// 4 : 몇 개의 종류가 있는지
s.has('a')
// true : a가 있나요?
s.has('f')
// false : f가 있나요?
s.add('z')
// Set(5) {'a', 'b', 'c', 'd', 'z'}

for (const i of s) {
  console.log(i)
}
// a, b, c, d 밷음 
let s = new Set('aabbbbcccdd'.split(''))

// 교집합
let a = new Set('abc')
let b = new Set('cde')
let cro = [...a].filter(e => b.has(e))
// a를 전개하면 배열이 된다

// setforEach(value, value, set)=>()

// 합집합 
let union = new Set([...a].concat(...b))
let union = new Set([...a, ...b])

// 차집합
let dif = [...a].filter(e => !b.has(e))

// 이터러블한 객체란? 순회가 가능한 객체다. 
// set, map, array, string
// 순서를 보장하나요? : set, map, array, string이 순서를 보장하지만 object는 순서를 보장하지 않는다. 

// https://school.programmers.co.kr/learn/courses/30/lessons/120903