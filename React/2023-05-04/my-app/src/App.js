import './App.css';
// webpack을 이용하면 위의 문법도 가능함 
// 자바스크립트에서 css를 불러오는 것 
// import Menu from './components/menu/Menu'
import TripList from './components/tripList/TripList'

// function TextArea() {
//   return (
//     <div className="wrapper">
//       <textarea
//         readOnly
//         maxLength={3}
//         style={{ backgroundColor: "blue" }}
//       /**속성을 나열할 때 쉼표사용하지 않고 공란이나 {} 사용 */
//       />
//     </div>
//   );
// }

// const name = "라이캣!!!!"
// const 변수 = "value"
// function 함수() {
//   console.log('함수 함수!')
// }
// const 값 = true

// function App() {
//   // 주석입니다, js의 영역이므로 이렇게 작성가능
//   return (
//     <div>
//       {100 + 1}
//       {'hello' + 'world'}
//       {[1, 2, 3].map(x => x ** 2)}
//       {/* jsx에서 .ma쓰면 리턴값이 문자로 */}
//       {함수()}
//       {변수}
//       {값 ? 'one' : 'two'}

//       {/** JSX 여기서는 이렇게 주석을 작성해야 한다*/}
//       <Menu />
//       <NewMenu />
//       <h1>안녕 {name}</h1>
//       <h1>안녕 라이캣!!</h1>
//     </div >
//   );
// }

// const date = new Date()
// const year = date.getFullYear()
// const month = date.getMonth() + 1
// const day = date.getDay()
// const hours = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()

// function Date() {
//   return (
//     <div>
//       <h1>{`년:${year}`}</h1>
//       <h1>{`월/일:${month}/${day}`}</h1>
//       <h1>{`시간:${hours}시 ${minutes}분 ${seconds}초`}</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <TripList />
    </div>
  );
}

export default App;
