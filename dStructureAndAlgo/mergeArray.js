// 배열+배열 []+[]. 정렬된 두개의 배열을 병합하기 
// 배열안에 요소는 숫자

// function mergeArray(arr1, arr2) {
//   let mergeArray = [...arr1, ...arr2].sort((a, b) => a - b)
//   const set = new Set(mergeArray);
//   return set
// }

// console.log(mergeArray([1, 2, 3], [2, 4, 5, 4]));


// 재현님 풀이
const myArr1 = [1, 3, 5, 7, 9]
const myArr2 = [0, 2, 8, 10]
function mergeArray(arr1, arr2) {
  let mergeArray = [...arr1, ...arr2].sort((a, b) => a - b)
  if (arr1.length === 0) {
    return '병합할 배열이 없습니다.'
  }
  if (arr2.length === 0) {
    return '병합할 배열이 없습니다.'
  }
  const mergedArray = [];

  let arr1FirstEl = arr1[0]
  let arr2FirstEl = arr2[0]
  let i = 1;
  let j = 1;
  // arr1FirstEl, arr2FirstEl 두 값이 모두 falsy 를 반활할 때까지 반복합니다.
  while (arr1FirstEl || arr2FirstEl) {
    if (arr2FirstEl === undefined || arr1FirstEl < arr2FirstEl) {
      // mergedArray = [arr1FirstEl, arr2FirstEl]
      // undefined와 무엇을 비교하더라도 false 값 나옴 
      mergedArray.push(arr1FirstEl);
      arr1FirstEl = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2FirstEl);
      arr2FirstEl = arr2[j];
      j++;
    }
  }

  return mergedArray
}

mergeArray(myArr1, myArr2)

