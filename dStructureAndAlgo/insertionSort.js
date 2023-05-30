// 삽입정렬
let myArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSort([...arr]) {
  // 첫 원소는 배열되어있다고 가정 그래서 1부터시작
  for (let i = 1; i < arr.length; i++) {
    // j는 정렬이 필요한 원소를 의미합니다. 만약 arr[j] 가 arr[j-1]보다 크다면 위치를 교환할 필요가 없습니다. 반대라면 교환합니다.
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr
}
console.log(insertionSort(myArr));

