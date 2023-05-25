// 안녕하세요 ==> 요세하녕안 으로 만들기

// const txt = '안녕하세요'
// function reverseStr(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseStr());

// 재현님 풀이
function reverseStr(str) {
  // 예외처리
  if (str.length < 2 || typeof str !== 'string') return

  const data = [];
  // for문을 마지막 인덱스부터 시작하게 하기 위해서 
  const lastIndex = str.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    data.push(str[i]);
    // data => [요,세,하,녕,안]
  }
  return data.join('')
}

console.log(reverseStr('안녕하세요'));