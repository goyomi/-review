let start = Date.now();

const result = (x) => {
  console.log(`${x}가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
}

// const blocking = () => {
//   let i = 0;
//   while (i < 99999999) {
//     i++
//   }
//   return "blocking finished"
// }

// result('동기식 코드1');
// result(blocking());
// result('동기식 코드2');

// promise 함수로 바꾸기
const asyncBlocking = () => {
  return new Promise((resolve) => {
    let i = 0;
    while (i < 9999999) {
      i++
    }
    resolve("blocking finished");
  });
}

result('동기식 코드1');
// 프로미스 객체를 만드는 과정은 동기적으로 진행된다
// result(asyncBlocking());

setTimeout(() => {
  result('setTimeout finished')
}, 0);

result(asyncBlocking().then((txt) => {
  result(txt);
}));

result('동기식 코드2');
