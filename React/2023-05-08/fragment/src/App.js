import React, { Fragment } from 'react';
// <React.Fragment> 사용시에만 필요함 <> 사용시에는 필요없음
import './FragmentTest.css'

function ListItem({ item }) {
  return (
    <>
      {/* div를 React.Fragment로 바꾸면 div로 계속 감싸지는 것 방지 -> 의미없는 태그 남발 방지. 축약형으로 상용 가능 <></> 요렇게 => 시멘틱 */}
      {/* Fragment 단축속성에서는 className 사용불가 */}
      <dt>사과</dt>
      <dd>사과는 가을이 제철이죠!</dd>
      {/* dt, dd를 스타일적으로 많이 묶어서쓰기 때문에 div로 묶어서 많이 사용하긴 하지만 이건 스타일적인 요소를 고려했을 때의 이야기  */}
    </>
  );
}

function Glossary(props) {
  return (
    <dl>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      {/* {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))} */}
    </dl>
  );
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];


function MyComponent() {
  return (
    list.map((item) => {
      return (<>
        <h1>{item.area}</h1>
        <p>{item.visited ? "방문함" : "아직안감"}</p>
      </>)
    })
  );
}

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function Fruits() {
  return (
    items.map((item) => {
      // 구조분해 할당으로 item에 id, name, desc바로 쓰고 값받아와도됨 
      return (
        <React.Fragment key={item.id}>
          <dt>{item.name}</dt>
          <dd>{item.desc}</dd>
        </React.Fragment>
      )
    })
  )
}

// ver.2 : 구조분해 할당 사용
// function Fruits() {
//   return (
//     items.map((id, name, desc) => {
//       // 구조분해 할당으로 item에 id, name, desc바로 쓰고 값받아와도됨 
//       return (
//         <React.Fragment key={item.id}>
//           <dt>{name}</dt>
//           <dd>{desc}</dd>
//         </React.Fragment>
//       )
//     })
//   )
// }

// ver.3 : dl추가
// function Fruits() {

//   const itemList = items.map(({ id, name, desc }) => {
//     return (<React.Fragment key={id}>
//       <dt>{name}</dt>
//       <dd>{desc}</dd>
//     </React.Fragment>);
//   });

//   return (
//     <dl>
//       {itemList}
//     </dl>
//   )

// }


function App() {
  return (
    <div>
      {/* <h1>안녕, 라이캣 1호!</h1>
      <h2>안녕, 라이캣 2호!</h2>
      <Glossary />
      <MyComponent /> */}
      <Fruits />
    </div>
  );
}

export default App;
