import React, { useState, useRef } from "react";

// 값이 바뀌고 나서 화면까지 바꿔주는 것 => setState
// 값을 참조해서 저장만함 => useRef, react가 기억하고 있음, 나중에 화면바뀔 때 저장되었던(기억하고 있던) 값이 들어감, 화면을 새로 그리는 기능은 없음, 나중에 화면바뀔 때 같이 바뀜 => 렌더링과 상관없이 값을 변경하고 싶을 때
// useRef(initialValue초기값) : useRef()로 생성된 객체의 .current 프로퍼티의 초기값

// 또한 컴포넌트의 태그(tag)에 직접 접근하고 싶을 때 useRef를 사용합니다. 자바스크립트에서 DOM element를 가지고 올 때 querySelector나 getElementById를 사용하지만 React에서는 useRef를 사용합니다. 
// => 데이터, state와 상관없이(리렌더링 하지 않고) component에 DOM을 제어하고 싶을 때 ref를 사용합니다.
// Ref는 남용하지 않습니다 => 왜? 리액트는 dom관리를 리액트에 모두 맡기길 원함 꼬일수도 있기 때문에 필요할 때만 사용해야 함 

const TryUseRefDom = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  const inputCheck = (e) => {
    e.preventDefault();
    console.log("로그인버튼 누름");
    console.log(emailInput.current.value, pwInput.current.value);
    // 이전값을 저장하는데 쓰이기도 하는데 이전 값은 .current 속성에 저장됨 
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput}/>
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput}/>
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default TryUseRefDom;