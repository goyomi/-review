import React, { useEffect, useState } from "react";

function getName() {
  console.log("사실은 겁나 오래기다리는중...");
  // 이 메세지가 계속 찍히는 이유: setNum이 실행되면서 상태가 변해서 리렌더링됨 ! -> 없애려면 어떻게 해야할까? 아래 useSate에 인자를 함수값으로 넣어줌 getName()->getName으로 => 더이상 콘솔이 찍히지 않음 
  return "개리";
}

function App() {
  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);
  return (
    <>
      <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
      <button onClick={() => setNum(num + 1)}>{num}</button>
      {/* (prevNum) => prevNum + 1) === num + 1 */}
      {/* 그런데 왜 이렇게 사용하는가? 함수형 업데이트(aka방탄코드) :  이전 상태 값을 기반으로 새로운 상태 값을 업데이트 할 때 사용 -> 5/10일꺼 보기 */}
    </>
  )
}

export default App;