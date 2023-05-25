// 이 문제는 실제로 입시문제로 사용되던 알고리즘 문제입니다.
// 배열이 하나 주어졌을 때 [3,2,4,5,2,1,0,3];
// 함수를 만듭니다. 가장 먼저 반복되는 원소의 값을 반환합니다. 
// 반복되는 원소가 없으면 undefined를 반환합니다.

// function repeat(array) {
//   let answer = [];
//   let repeatedValue = null;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < i - 1; j++) {
//       if (array[i] === array[j]) answer.push(array[i]);
//     }
//   }
//   return answer;
// }

// const myArray = [3, 2, 4, 5, 2, 1, 0, 3];
// console.log(repeat(myArray));

// 재현님 풀이
// O(N^2)
let arr = [3, 2, 4, 5, 2, 1, 0, 3];
function test(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]
      }
    }
  }
  return undefined
}
console.log(test(arr));

// 해쉬테이블 : 키를 등록해놓고 그 키를 사용한적이 있는지 없는지 검사하는 것
function test2(arr) {
  const useHash = {};
  for (let i = 0; i < arr.length; i++) {
    if (useHash[arr[i]]) {
      // if (useHash[arr[i]]) ==> useHash{}안에 arr[i]가 있나
      return arr[i]
    } else {
      // 해쉬테이블의 키로 arr의 원소를 차례로 등록
      // {3:0, 2:1, }
      useHash[arr[i]] = i
    }
  }
}

let list = [3, 2, 4, 5, 2, 1, 0, 3]
function sort(list) {
  let arr = []
  for (let i = 0; i < list.length - 1; i++) {
    if (!arr.includes(list[i])) {
      arr.push(list[i])
    } else {
      return (list[i])
    }
  }
}

console.log(sort(list))