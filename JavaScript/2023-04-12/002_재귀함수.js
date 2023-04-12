// 재귀함수의 중요도 (*)
// 다이나믹 프로그래밍, 메모라이징 기법 등을 사용하는 순간이 오게 되면 재귀함수의 중요도가 (**)

// 재귀함수 => 내가 나를 호출하는 것
// 반복문으로 반복할 수 잇는 것은 재귀함수로 만들 수 있다.
// 재귀함수로 만들 수 있는 것은 반복문으로도 만들 수 있다.
// 실무에서는 반복문 사용, 재귀는 사용 안하는 것을 권장. 알고리즘 문제에서는 간혹 재귀를 호출해야 할 일이 있다. (팰린드롬 문자: 오디오, 기러기, 우영우, 스위스, 토마토)
// 장점은 미미한데.. 단점이커서 

// factorial
// 5! == 5 * 4 * 3 * 2 * 1
result = 1
for (let i = 1; i < 6; i++) {
  result *= i
}
result

function factorial(n) {
  if (n <= 1) { // 종료 조건이 없으면 무한반복이다.
    return n
  }
  return n * factorial(n - 1)
}

// 이런식으로 진행된다.
//                  return          최종값
factorial(5)  5 * factorial(4)    5 * 24 == 120
factorial(4)  4 * factorial(3)    4 * 6 == 24
factorial(3)  3 * factorial(2)    3 * 2 == 6
factorial(2)  2 * factorial(1)    2 * 1 == 2
factorial(1)  1

// 누적합(이렇게 일일일 순회하지 않고 구할 수 있는 값이기 때문에 두 개다 비효율적인 코드이다. 특히 소수 구하는 문제같은 곳에서 2중 for문을 사용하는 것도 매우 비효율 적이다)
result = 1
for (let i = 2; i < 1001; i++) {
  result += i
}
result

function sigma(n) {
  if (n <= 1) {
    return n
  }
  return n + sigma(n - 1)
}
sigma(1000)

const n = 1000
console.log(n * (n + 1) / 2)
// 이렇게 간단한게 수학 수식으로 사용할 수 있다.

// 2. 문자열 뒤집는 것 
result = ''
for (const i of 'hello wolrd') {
  result = result + i
}
result

result = ''
for (const i of 'hello world') {
  result = i + result
}
result

// 'h' + '' // 첫 번째 순회
// 'e' + 'h' // 두 번째 순회
// 'l' + "eh" // 세 번째 순회

function reverse(txt) {
  if (txt.length <= 1) {
    return txt
  }
  return txt[0] + reverse(txt.slice(1))
}
reverse('hello world')