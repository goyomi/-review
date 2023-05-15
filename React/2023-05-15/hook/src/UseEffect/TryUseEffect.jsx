import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count+1)
  }

  useEffect(() => {
    // 처음 페이지를 켰을 때 렌더링이 안되게 하고싶다 
    if( count !== 0){
      if(count % 2) {
        console.log("홀수입니다")
      } else {
        console.log("짝수입니다")
      }
    }
  }, [count])

  return(
    <>
    <div>{count}</div>
    <button onClick={countUp}>up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;