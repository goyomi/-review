async function message() {
  let hello = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 100)
  })

  let world = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('world');
    }, 100)
  })

  console.log(`${hello} ${world}`);
}

// message();

// promise를 사용해보기 
// function message() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('hello');
//     }, 100)
//   }).then((result) => {
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(result + 'world');
//       }, 100)
//     }).then((message) => {
//       console.log(message);
//     })
//   })
// }

message();

console.log('i am sync')