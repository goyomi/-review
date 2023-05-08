function Hello(props) {
  // props => 파라미터, 매개변수
  // 컴포넌트 이름도 실제 사용하는 것을 고려해서 이름지어주면 좋음 
  const name = '라이캣!';
  const someStyle = { backgroundColor: "black", color: "white" };

  return (
    <div>
      <h1 style={someStyle}>안녕, {props.name} 1호</h1>
      <h1>안녕, {props.name} 2호!</h1>
      <div className="newClass" />
    </div>
  )
}

export default Hello;

// rfc 자동완성기능 ES7+ React/Redux/React 익스텐션 깔면 사용가능
// react functional component