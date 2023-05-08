import React, {useState} from 'react'

function Resume(props){
  // console.log(useState())
  const someStyle = { border: "1px solid black" };

  const [like, setLike] = useState(0);
  // const [변수, 변수의 상태를 바꿔줄 수 있는함수] = useState(초기값)
  const [txt, setTxt] = useState('hello');
  // let like = 0;

  function clickLike() {
      setLike(like + 1);
      console.log(like);
  }

  return(
    <section style={someStyle}>
    <h1>{props.name}자기소개서</h1>
    <strong>{props.hello}</strong>
    <dl>
      <dt>취미:</dt>
      <dd>{props.hobby}</dd>
      <dt>좋아하는 음식:</dt>
      <dd>{props.food}</dd>
      <dt>좋아하는 색:</dt>
      <dd><span style={{color: 'blue'}}>{props.color}</span></dd>
    </dl>
    <button onClick={clickLike}>like <span>{like}</span></button>
    {/* html에서는 <button onclick="함수이름">으로 선언하던 것과 달리 리액트에서는 <button onClick={함수}>로 선언합니다. */}
    {/* 콘솔에서는 잘 작동하지만 버튼의 숫자는 올라가지 않는데, 변수의 값이 바뀌어도 페이지는 랜더링하지 않기 때문이다. 모든 변수가 변할때마다 컴포넌트를 업데이트 한다면 많은 리소스가 낭비될 것입니다. 그래서 특정 변수를 지정하여 그 변수가 변할 때마다 컴포넌트를 업데이트하라는 명령을 내려주어야 합니다. => useState*/}
    {/* <input type="text" value={txt} /> */}
    </section>
  );
}

export default Resume;
