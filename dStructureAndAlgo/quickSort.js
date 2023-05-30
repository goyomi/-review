// 퀵소트

let myArr = [10, 9, 8, 5, 6, 1, 3, 4, 2, 1];
function quickSort([...arr]) {
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  const leftSection = [];
  const rightSection = [];
  for (let i = 0; i < arr.length; i++) {
    // 기준값보다 작으면 왼쪽으로 크면 오른쪽으로 
    if (arr[i] < pivot) {
      leftSection.push(arr[i]);
    } else {
      rightSection.push(arr[i]);
    }
  }
  console.log('leftSection' + leftSection);
  console.log('rightSection' + rightSection);

  return quickSort(leftSection).concat([pivot], quickSort(rightSection));
}

// console.log(quickSort(myArr));


// 문제 : 길이 오름차순으로 정렬하기 (길이 긴거부터)
const countries = ["USA", "Australia", "Canada", "Germany", "Japan", "Brazil"];

function countriesName([...arr]) {
  let pivotIndex = Math.floor(arr.length / 2);
  const leftSection = [];
  const rightSection = [];

  for (let i = 0; i < arr.length; i++) {
    let textLength = countries[i].length;
    if (arr[i] < textLength) {
      leftSection.push(arr[i]);
    } else {
      rightSection.push(arr[i]);
    }
  }
  return quickSort(leftSection).concat([textLength], quickSort(rightSection));
}

console.log(countriesName(countries));