// 1번 문제
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript
function solution(my_string, letter) {
  return my_string.split(letter).join('');
}
'BCBdbe'.split('B')
'BCBdbe'.split('B').join('')

// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
  return my_string.replace(letter, '');
}
'BCBdbe'.replace('B', '')

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
  return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '')
let letter = 'B'
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
  // new RegExp(패턴으로 사용할 문자열, 플래그)
  // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
  let reg = new RegExp(letter, 'g')
  return my_string.replace(reg, '');
}

// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')

// 2번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 숫자인걸 뽑아내거나(match) 문자를 다 지워주면됨(replace)
// 정답 유형 1: 숫자를 뽑아낸다
function solution(my_string) {
  return my_string.match(/[0-9]/g)
}

"aAb1B2cC34oOp".match(/[0-9]/g)
"aAb1B2cC34oOp".match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
  .match(/[0-9]/g)
  .map(x => parseInt(x))
  .reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
  .match(/[0-9]/g)
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)

// 정답 유형 2: 문자를 지워준다
function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp"
  .replace(/[^0-9]/g, '')
  .split('')
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)

// 3번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120891

// 오답 : null 일때 length가 없다!
function solution(order) {
  return order.toString().match(/[369]/g).length;
}

(163009).toString().match(/[369]/g)
  (0).toString().match(/[369]/g)
  (10).toString().match(/[369]/g)

// 정답
function solution(order) {
  let value = order.toString().match(/[369]/g) ?? []
  return value.length;
}
// 한줄로 줄이기
function solution(order) {
  return (order.toString().match(/[369]/g) ?? []).length;
}

// 4번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 아래와 같이 풀 수 있지만 정규표현식을 사용하면 더 간단해집니다.
function solution(my_str, n) {
  let result = []
  for (let i = 0; i < my_str.length; i += n) result.push(my_str.slice(i, i + n))
  return result
}

[0 - 9][0 - 9][0 - 9][0 - 9] - [0 - 9][0 - 9][0 - 9][0 - 9]
[0 - 9]{ 1, n }

"abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g)
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g)
"abc1Addfggg4556b".match(/\w{3}/g) // 문자
"abc1Addfggg4556b".match(/\d{3}/g) // 숫자
"abc1Addfggg4556b".match(/.{3}/g) // 모든문자
"".match(/.{3}/g) // 주의 : null

// 오답
function solution(my_str, n) {
  let reg = new RegExp(`.{${n}}`, 'g') // 마지막 남은 것도 리턴해줘야 해서 오답
  return my_str.match(reg)
}

// 정답
function solution(my_str, n) {
  let reg = new RegExp(`.{1,${n}}`, 'g')
  return my_str.match(reg)
}

function solution(my_str, n) {
  let reg = new RegExp(`\\w{1,${n}}`, 'g') // '\'를 표현하기 위해서 '\\'를 사용
  return my_str.match(reg)
}


// 5번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번 문제 업그레이드 
// 2번 문제 해답
function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 오답
function solution(my_string) {
  return my_string
    .match(/\d+/g)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 정답
function solution(my_string) {
  return (my_string.match(/\d+/g) ?? [])
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/\d/g)
"aAb1B2cC34oOp".match(/\d+/g)
"aAb1B2c111C34oO123p".match(/\d+/g)

///////////////// 그룹 연습문제 /////////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.

// '87a99b00fww89e' => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/([0-9][0-9])([a-zA-Z])/g) // 숫자 그룹과 문자 그룹으로 나눕니다.
'87a99b00fww89e'.match(/([0-9]{2})([a-zA-Z])/g)
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g)
