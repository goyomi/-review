const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text = "";

`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>Volvo</h2>
</section>
...
`

text += '<section><h2>' + cars[0] + '</h2></section>'
text += '<section><h2>' + cars[1] + '</h2></section>'
text += '<section><h2>' + cars[2] + '</h2></section>'
text += '<section><h2>' + cars[3] + '</h2></section>'
text += '<section><h2>' + cars[4] + '</h2></section>'

console.log(text)

// 이런 문장을 반복문을 통해서 간단하게 만들 수 있다

const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text2 =''
for (let i = 0; i < car.length; i++) {
  text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}
text2

for (let i = 0; i < 10; i++) {
    console.log(i)  
}
console.log(i)
// console.log(i)의 i는 반복문이 끝난 다음 호출할 수 없습니다.

for (let i = 0; i < 10; i++) {
  console.log(i)  
}
// 위 구문과 차이 없다. 

for (i = 0; i < 10; i += 2) {
  console.log(i)  
}
// let를 생략하면 i가 전역으로 생성되어버린다.

// for (;;) {
//   console.log(실행하지마시오)  
// }
// 무한반복 코드이다. 이런코드는 작성하면 안된다. 의도한 무한반복은 매우 위험하다.
// 무한반복은 메모리를 많이 잡아먹는다.
// 1. 반복의 시간을 가능하면 정해주고 2. 탈출조건을 명확히 해주면 좋다. 

