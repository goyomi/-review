import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from "react-router-dom";

// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice
// - **User Page :** /users

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      {/* 라우팅: 적절한 길을 찾아주는 애 */}
      <nav>
        <ul>
          <h1>과제</h1>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/products/1">ProductDetail</Link></li>
          <li><Link to="/products/1/notice">ProductDetailNotice</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/users">User</Link></li>
        </ul>
      </nav>
      <Routes>
        {/* 라우트: 이 주소(path)로왔을때 이거보여주는 애 */}
        <Route path="/" element={<Homepage />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
        {/* :id => 주소에 입력값을 받은 것을 출력 */}
        <Route path="/products/:id/notice" element={<ProductDetailNotice />}/>
        <Route path="/cart" element={<Cart name="Hello 야옹 World "/>}/>
        <Route path="/users/" element={<User />}>
        {/* 엘리멘트 안에 바로 코드작성해도 관계없음 <div>Coupon</div> */}
          <Route path="/users/coupon" element={<Coupon />} />
          <Route path="/users/question" element={<Question />}/>
          <Route path="/users/notice" element={<Notice />}/>
        {/* <Route path="/users/*" element={<User />}/> */}
        {/* /뒤에 *을 붙이면 지정된 주소가 없으면 저 페이지를 보여준다는 의미 */}
        {/* 중첩문 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Homepage(){
  return <h1>Homepage</h1>
}

function ProductDetail(){
  const {id} = useParams()
  return <h1>ProductDetail{id}</h1>
}

function ProductDetailNotice(){
  const {id} = useParams()
  return <h1>ProductDetail{id}Notice</h1>
}

function Cart({name=''}){
  return <h1>{name}Cart</h1>
}

function User(){
    return <div>
    <h1>여기는 User</h1>
    <Link to="/users/coupon">Coupon</Link>
    <Link to="/users/question">Question</Link>
    <Link to="/users/notice">Notice</Link>
    <Outlet />
  </div>
}

function Coupon(){
  return <h1>Coupon</h1>
}

function Question(){
  return <h1>Question</h1>
}

function Notice(){
  return <h1>Notice</h1>
}

export default App;