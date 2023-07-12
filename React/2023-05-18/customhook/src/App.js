import React, { useEffect, useState } from 'react'
import TestBox from './components/TestBox';
import useMouseLocation from './hooks/useMouseLocation';

function App() {

  const location = useMouseLocation();

  return (
    <div>
      hello world
      <TestBox />
      {`x축 위치: ${location.x} y축 위치:${location.y}`}
    </div>
  );
}
export default App;
