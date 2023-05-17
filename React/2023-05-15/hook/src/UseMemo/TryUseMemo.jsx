import { useState, useMemo } from "react";

// useMemo: 부하가 생기는 함수를 반복해서 작업할 때 기억해두었다가 사용하는 기법

function 부하() {
  console.log("계산중")
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  console.log("계산끝")
  return s;
}

// 엄청 천천히 올라감 => 부하가 걸려서 그럼 => 성능 최적화를 위해서 사용 
// useMemo를 사용하면 값을 기억하고 있기 때문에 빨라짐 
// 값을 새로 받아오고 싶을 때가 있음 
// 한번 계산할 때 저장해놓고 나중에 꺼내씀 함수의 리턴값을 받아서반환 

function TryUseMemo() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo)
  }

  console.log('랜더링!!')
  
  const result = useMemo(()=>{
    return 부하()
  }, [countTwo])
  // countTwo가 바뀌었을 때 부하 함수를 실행시키는 메모
  // 평소에는 memo되어있는것을 가져다 쓰고 
  // useEffect 랑 같은거 아님? => 실행이 안됬을 때는 이전에 계산한 값을 가져온다. 

  return (
    <div className="App">
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
export default TryUseMemo;