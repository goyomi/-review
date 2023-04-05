// 현재 많이사용하지는 않는 구문 
// 장점: 가독성이 좋다

const value = 'two'

switch (value) {
  case 'one':
    console.log('hello one')
    break;
  case 'two':
    console.log('hello two')
    break;
  case 'three':
    console.log('hello three')
    break;
  default:
    console.log('hello default')
    break;
}
// hello two

/////////////////////////

const value2 = 'four'

switch (value2) {
  case 'one':
    console.log('hello one')
    break;
  case 'two':
    console.log('hello two')
    break;
  case 'three':
    console.log('hello three')
    break;
  default:
    console.log('hello default')
    break;
}
// hello default

// 초보자들이 많이하는 실수: break를 안쓴다..(까먹고)
// break를 안쓰면 모든 문장을 읽어서 차례대로 출력함 

/////////////////////////

switch (new Date().getDay()) {
  case 0:
    console.log('일요일')
    break;
  case 1:
    console.log('월요일')
    break;
  case 2:
    console.log('화요일')
    break;
  case 3:
    console.log('수요일')
    break;
  case 4:
    console.log('목요일')
    break;
  case 5:
    console.log('금요일')
    break;
  case 6:
    console.log('토요일')
    break;
  default:
    break;
}
// 목요일

// new Date().getDay() 따로사용가능 오늘 목요일인데 4라고뜸 
// 일요일부터 0일 1월 2화 3수 4목 5금 6토
// 마지막에 default를 꼭 넣어주기 
// option + shift 방향키 하면 줄 전체가 복붙됨,, 블록지정하면 여러줄이 되기도 함 
// 단어 선택+ cmd + d은 동일한 단어 찾아줌 
// cmd + a, cmd k + f 자동정렬
// cmd + shift + z 커멘드 제트값

/////////////////////////

// 다른 언어에서는 switch문을 어떻게 사용할까? python은 switch문이 없는데? 
// Javascript에서는 아래구문보다는 switch를 더 많이 사용함 
// 객체(object)로는 어떻게 나타낼 수 있을까? 

const 요일 = new Date().getDay()
const 요일객체 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일'
}

console.log(요일객체[요일])

// switch의 default값은 어떻게 처리? 
const 요일2 = 10
const 요일객체2 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일'
}

// 널리쉬 연산자 사용
console.log(요일객체2[요일2] ?? 'hello')
// hello

// 단락평가 사용
console.log(요일객체2[요일2] || 'hello')
// hello
