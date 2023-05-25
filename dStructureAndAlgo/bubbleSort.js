let a = [1] // 비교횟수 : 0
let b = [3, 2] // 비교횟수 : 1
let c = [3, 2, 1] // 비교횟수 : 2
let d = [4, 3, 2, 1] // 비교횟수 : 3 
// 정렬이 처리되는 과정이 마치 거품이 올라오는 모습과 같다고 해서 버블정렬이라고 한다. (두 개씩 비교해서 자리바꿔짐)

let myArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    // 원소의 위치를 변경해줍니다
    if (arr[index] > arr[index + 1]) {
      let temp = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = temp;

      [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    }
  }
  return arr
}

// let result = bubbleSort(myArr);

function bubbleSortAdvanced(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    for (let index2 = 0; index2 < arr.length - 1; index2++) {
      // 원소의 위치를 변경해줍니다
      if (arr[index2] > arr[index2 + 1]) {
        let temp = arr[index2];
        arr[index2] = arr[index2 + 1];
        arr[index2 + 1] = temp;

        [arr[index2], arr[index2 + 1]] = [arr[index2 + 1], arr[index2]];
      }
    }
  }
  return arr
}

let result2 = bubbleSortAdvanced(myArr);
console.log(result2)
