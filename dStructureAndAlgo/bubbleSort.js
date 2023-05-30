let a = [1] // 비교횟수 : 0
let b = [3, 2] // 비교횟수 : 1
let c = [3, 2, 1] // 비교횟수 : 2
let d = [4, 3, 2, 1] // 비교횟수 : 3 
// 정렬이 처리되는 과정이 마치 거품이 올라오는 모습과 같다고 해서 버블정렬이라고 한다. (두 개씩 비교해서 자리바꿔짐)

let myArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let myArr2 = [10, 9, 8, 7, 6];
let myArr3 = [1, 1, 2, 3, 4, 5, 6, 8, 9, 10]

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
let counter = 0;
function bubbleSortAdvanced(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    for (let index2 = 0; index2 < arr.length - 1 - index; index2++) {
      // 원소의 위치를 변경해줍니다
      if (arr[index2] > arr[index2 + 1]) {
        let temp = arr[index2];
        arr[index2] = arr[index2 + 1];
        arr[index2 + 1] = temp;

        [arr[index2], arr[index2 + 1]] = [arr[index2 + 1], arr[index2]];
      }
      console.log(arr);
    }
  }
  console.log(counter)
  return arr
}

// let result2 = bubbleSortAdvanced(myArr);
// console.log(result2)

// 개선



// 배열이 정렬이 되었음에도 불구하고 for문이 도는 이유? : 정렬이 필요한건지 아닌지 판단하는 기준이 없기 때문 
function bubbleSortAdvanced3(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    // 정렬이 필요한 배열인지 상태를 저장한다
    let isSorted = true;
    for (let index2 = 0; index2 < arr.length - 1 - index; index2++) {
      // 원소의 위치를 변경해줍니다
      if (arr[index2] > arr[index2 + 1]) {

        [arr[index2], arr[index2 + 1]] = [arr[index2 + 1], arr[index2]];
        isSorted = false;
      }
      console.log(arr);
      counter++
    }
    if (isSorted === true) break;
  }
  console.log(counter)
  return arr
}

let result2 = bubbleSortAdvanced3(myArr3);
// 그래도 counter가 9번 => 안쪽 for문은 돌고 무조건 한 번은 돌아야함 