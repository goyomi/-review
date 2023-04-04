// sort: 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

const avengers = ['아이언맨', '스파이더맨', '헐크']
console.log(avengers.sort());
//(3) ['스파이더맨', '아이언맨', '헐크'] 가나다순으로

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// (4) ['Dec', 'Feb', 'Jan', 'March'] ABC순으로

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// (5) [1, 100000, 21, 30, 4] 123 순으로
// 숫자인데 왜 앞글자의 순으로 진행되는거지....?


// 실무사용코드
function sort(key){
  if (click){
      click = false
      var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
  }
  else{
      click = true
      var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
  }
}

const nums = [3, 1, 11, 8, 6];
console.log(nums.sort((a , b) => {
    console.log(a, b)
}));