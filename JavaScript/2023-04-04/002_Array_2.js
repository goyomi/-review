const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el){
    return el % 2 === 0
})
// (5) [2, 4, 6, 8, 10], 짝수만 나옴 
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function(el){
    return el % 2 !== 0
})
// (5) [1, 3, 5, 7, 9], 홀수만 나옴

function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1)
        .filter((v) => v % 2 === 0)
        .reduce((a, c) => a + c, 0);
}
// . 으로 계속 이어지는것 => 메서드체이닝
// 의미 없는 값은 _ 를 넣는 것이 관행 (꼭X)

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function(el) {
    return el % 2 !== 0
})

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))

// reduce
// 0을 항상 넣어야 한다(견고한코드)
const arr1 = [1, 2, 3, 4, 5]
arr1.reduce((a, c) => a + c, 0)

// includes
const arr1 = ['hello', 'world', 'hojun']
arr1.includes('world')

// join: 배열을 합쳐서 문자열로 만드는데 join('구분자')기준으로 합쳐준다
const arr1 = ['hello', 'world', 'hojun']
arr1.join('!')