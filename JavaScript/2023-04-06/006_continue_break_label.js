// break는 switch의 전유믈은 아니고 다른곳에서도 사용할 수 있다. 
// break는 자신을 감싼 반복문만 탈출한다. 그 상위 반복문까지 탈출하지는 않는다. 

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${k}`)
  }
}

// countinue는 아래 구문을 실행시키지 않고 다음 루프로 넘어가서 다시 구문을 실행한다.

// label은 특정한 곳으로 '점프'하게 만든다. 가독성을 해친다. 
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
      if (i + j === 3) {
          break outer;
      }
      console.log(i, j);
  }
}

hojun: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
      if (i + j === 3) {
          break hojun;
      }
      console.log(i, j);
  }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
hojun: for (let i = 2; i < 3; i++) {
      for (let j = 1; j < 3; j++) {
          if (j === 3) {
              break hojun;
          }
          console.log(`${반복}. ${i} X ${j} = ${i * j}`)
      }
  }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
  hojun: for (let i = 2; i < 10; i++) {
              for (let j = 1; j < 10; j++) {
                  if (j === 3) {
                      break hojun;
                  }
                  console.log(`${반복}. ${i} X ${j} = ${i * j}`)
              }
          }
}

hojun: for (let 반복 = 0; 반복 < 3; 반복++) {
          for (let i = 2; i < 10; i++) {
              for (let j = 1; j < 10; j++) {
                  if (j === 3) {
                      break hojun;
                  }
                  console.log(`${반복}. ${i} X ${j} = ${i * j}`)
              }
          }
}

