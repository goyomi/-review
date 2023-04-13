// this(***)
// 자기를 호출한 

function a() { console.log(this) }
a();
// window를 호출하고 있다

function b() {
  console.log('hello wolrd')
}
window.b()
// window를 호출하고 있다.

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  }
}
// this가 누구일까? => console.log로 찍어보면 된다.
// 1. func1
// 2. myObj
// 3. window
myObj.func1();
// myObj를 호출


///////////////

// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 의미가 달라지기 때문이다. 

function sayName() {
  console.log(this)
}

var c = {
  'hello': 'world',
  'say': sayName()
}

var b = {
  'c': c
}
// var b = {c}
// 

var a = {
  'b': b
}

// 문제를 조금 더 꼬아보겠습니다.
function sayName() {
  console.log(this)
}

var c = {
  'hello': 'world',
  'say': sayName
}

var b = { // var b = {c}
  'c': c,
  'say': sayName
}

var a = { // var a = {b}
  'b': b,
  'say': sayName
}


/// 추가 예제 ///

function sayName() {
  console.log(this.name)
}

sayName()

let peter = {
  name: 'Peter Paker',
  say: sayName
}

let bruce = {
  name: 'Bruce Wayne',
  say: sayName
}

peter.say()

////
function attackBeam() { // 레이저 공격
  this.hp -= 20
}

function attackKnife() { // 레이저 공격
  this.hp -= 5
}

let jombi = {
  name: 'jombi',
  damaged: [attackBeam, attackKnife],
  hp: 10000,
  power: 2
}

let thanos = {
  name: 'thanos',
  damaged: attackBeam,
  hp: 1000,
  power: 100
}

jombi.damaged()
jombi

// thsi 사용예시
let 호텔 = [{
  '이름': '하나호텔',
  '위치': '제주도 제주시 001',
  '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
  '방의개수': 50,
  '예약자수': 25,
  '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
  '이름': '둘호텔',
  '위치': '제주도 제주시 002',
  '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
  '방의개수': 100,
  '예약자수': 30,
  '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
  '이름': '셋호텔',
  '위치': '제주도 제주시 003',
  '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
  '방의개수': 120,
  '예약자수': 80,
  '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

/////
function a() {
  console.log(this)
  function b() {
    console.log(this)
    function c() {
      console.log(this)
    }
    c()
  }
  b()
}
a()

// a, b, c모두 window
// a,b,c() 이런식으로 호출한 객체를 타고 올라가는 형태가 아니다.