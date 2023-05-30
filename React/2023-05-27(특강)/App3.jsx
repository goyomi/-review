const { useState } = React;

function App() {
  const [num, setNum] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  // 화면에 값 변하는거 쓰고싶으면 useState쓰셈 ㅋ
  // state랑 setState가 있는데 setState는 state를 바꿀때 사용
  // setState를 이용해서 값을 바꾸면 화면이 새로그려짐!!

  React.useEffect(() => {
    console.log("num이 바뀌었습니다.");
  }, [num]);
  React.useEffect(() => {
    console.log("num2이 바뀌었습니다.");
  }, [num2]);
  // useEffect는 [의존성배열]안의 값이 바뀌면 효과를 일으켜준다!
  // 그래서 언제쓰는가? 내가 원하는 state 가 변할 때 마다 관련하여 어떤 행동을 하고 싶을 때 쓴다.
  React.useEffect(() => {}, []);
  // 이렇게 적으면 마운트 일때만(최초 컴포넌트 만들어 질때만) 실행됨
  // 원래 마운트일때, 업데이트 될 때 클린업이 일어남
  // 매 랜더링때 어떤 효과를 실행하고 싶으면, 의존성 배열 칸에 아무것도 넣지 않는다. (배열조차 넣지 않음 )

  return (
    <div>
      {num} 뭐하라고있는거임?? {num2}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          setNum2(num2 - 1);
        }}
      >
        빼기
      </button>
    </div>
  );
}

function index() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}

index();
