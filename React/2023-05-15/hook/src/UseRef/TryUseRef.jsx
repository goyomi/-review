import React, { useState, useEffect, useRef } from "react";

// useRef: use Reference(참조) 줄임말
// 이전 값을 기억하고자 할 때 사용

function Counter2() {
  const [num2, setNum2] = useState(0);
  const num = useRef(0);

  return (
    <>
      <button onClick={() => setNum2(num2 + 1)}>버튼</button>
      <div>{num2}</div>
      <button
        onClick={() => {
          num.current += 1;
          console.log(num.current);
          // 카운트가 안올라가는 이유 위에 function Counter2이 실행될 때마다 let num이 선언되면서 0으로 계속 초기화 된다 
          // => useRef로 해결해보자 
        }}>
        버튼
      </button>
      <div>{num.current}</div>
    </>
  );
}

export default Counter2;