import { useState, useEffect, useLayoutEffect } from 'react'

function App() {
  const [value, setValue] = useState(100);

  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
      <button onClick={() => { setValue(1000) }}>커져랏!</button>
      <button onClick={() => { setValue(200) }}>작아져랏!</button>
      {/* 커저라 버튼 계속 누르면 껌벅거림 현상 나타냄 => useLayoutEffect로 해결 : 리페인팅 되기전에 동작이 끝나버리기 때문 */}
    </div>
    // useEffect는 비동기적으로 동작하지만, useLayoutEffect는 동기적으로 동작하기 때문. 따라서 useLayoutEffect가 오래걸리는 작업이라면 화면도 늦게 렌더링 된다.
  )
}

export default App;