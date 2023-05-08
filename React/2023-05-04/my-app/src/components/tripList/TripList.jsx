import './TripList.css'

function TripList() {

  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ]; /** 밖에 선언해도 관계없음 */

  let areas = list.map((item)=>{
    return (
      <li key={item.no} className={item.visited ? "list-area-item active" : "list-area-item" }>{item.area}</li>
      /** li에 들어가는 값에는 key라는 프로퍼티가 존재 key 값을 넣어줘야함 난수를 넣기도 하지만 대부분 서버에서 가져온 숫자를 넣는경우가 많음. 위의 list에 no가 id로 주는 경우도있고 이 값을 넣으면 됨
      key를 넣는데는 최적화와 관련이 있음. 만약에 사용자의 인터렉션에 의해서 li의 값이 바뀌는 경우 => 리스트에서 값을 선택하고 다음 버튼을 눌러서 새로고침 되는 경우, 갱신이 될때 사실상 ui의 모습은 동일 안의 내용만 바뀜. 바뀔 때 바뀔 것과 이전 것을 비교해서 바뀐 것만 새로 그려줌(똑똑하게). 리액트는 필요한 부분만 바꿔줌. 좀 더 빠른 랜더링을 위해서 => 기존 키와 바뀐 키를 비교하기 때문에 키값이 필요함 !!!
      만약에 개발자가 key 값을 넣지 않으면 .map의 index 값을 자동으로 가져옴 => 가져올 값이 마땅히 없으면 Index 를 넣어주삼 
      난수발생기를 사용하는 경우도 있는데 이건 아무쓸모가 없음 => 왜? 새로 고침하는 리스트와 비교를 해야하는데 난수끼리는 비교가 안됨.. */
    )
  })

  return <ul className="list-aria">(areas)</ul>

}

export default TripList;






/** const listStyle = { border: " {1}: px, solid, black ", listStyle: "none" };
const checked = { color: "white", backgroundColor: "royalblue" }

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function visitList() {
  if (list.visited === true) checked
  return (
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
ul li안에 요소 넣는방법 */