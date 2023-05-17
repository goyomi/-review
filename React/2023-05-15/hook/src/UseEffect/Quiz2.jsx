import React, { useState, useEffect } from 'react';

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  useEffect(()=>{
    // useEffect : 리액트에서 컴포넌트의 상태가 바뀌었을 때 실행해주는 것
    // state가 변경되었을 때 렌더링되어 실행되는 것 ! 
    // 유즈이팩트는 함수 동작만하는애
    const Interval = setInterval(() => {
      const today = new Date();
      setToday(today);
      setHour(today.getHours());
      setMin(today.getMinutes());
      setSec(today.getSeconds());
    }, 1000);
    return () => {
      clearInterval(Interval);
    }
  }, [today])
  // []안에 들어가는 값을 dependency 라고 부르는데 dependency 파라미터 값에 의존하여 useEffect 함수가 실행될지 말지를 결정. dependency의 값이 변경될 때 useEffect 실행됨
  return(
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>);
}

export default Time;