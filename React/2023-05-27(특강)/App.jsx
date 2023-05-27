const { useState } = React;

function MyHeader({ pageName, a }) {
  //  MyHeader(props), const { pageName, a } = props;
  // 이 안에 pageName이라는 값을 키로 값을 가져올 수 있다
  // 마찬가지로 a라는 키로 값을 가져올 수 있다.
  // ==> 구조분해할당
  // = MyHeader({ pageName, a })
  return (
    <>
      <h1>아 이건 제목이야 여기는 {pageName}!</h1>
      <h2>이건 부제목이야 여기는 {pageName} 부제목!</h2>
    </>
  );
}

// pageName="홈페이지" 이것은 객체로 들어간다
// {pageName : "홈페이지" a:"a"}

const Memo = ({ title, idx }) => {
  return (
    <>
      <div>{idx + 1}메모</div>
      <article>{title}</article>
    </>
  );
};

function MemoList({ titles }) {
  {
    titles.map((title, idx) => {
      return <Memo title={title} idx={idx} />;
    });
  }
}

function HomePage() {
  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState([]);

  // const buttonHandler = (e) => {
  //   setTitle(e.target.value);
  //   console.log(e.target.value);
  // };

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const onClickButtonHandler = () => {
    const newTitles = [...titles, title];
    setTitles(newTitles);
  };

  return (
    <>
      {/* <MyHeader pageName="홈페이지" a="a입니다" />
      <MyHeader pageName="페이지2" a="a입니다" /> */}

      {/* <MyHeader pageName={title} a="a입니다" /> */}

      <input type="text" onChange={onChangeHandler} />
      <button onClick={onClickButtonHandler}>버튼</button>
      <br />
      {/* {}안에는 값만 들어갈 수 있음 */}
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // const header = document.createElement("h1");
  // header.innerText = "아 이건 제목이야";
  // root.appendChild(header);
  <MemoList />;
  root.render(<HomePage />);
}

App();
