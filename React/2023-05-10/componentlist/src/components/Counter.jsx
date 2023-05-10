import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  const addNum = () => {
    setCount(count + 1);
    // React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리합니다.
    // 함수형 업데이트
    // setCount(prevCount => prevCount+ 1);
    // 함수형 업데이트라고 표현합니다. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장합니다. 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(버츄얼 돔)을 비겨하여 처리할 수 있습니다.
  };

  const subNum = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={addNum}>+1</button>
      <button onClick={subNum}>-1</button>
    </div>
  )
}
