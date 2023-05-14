import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path="/products/:id/notice" element={<ProductDetailNotice />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/users/coupon" element={<Coupon />}/>
        <Route path="/users/question" element={<Question />}/>
        <Route path="/users/notice" element={<Notice />}/>
        <Route path="/users" element={<User />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Homepage(){
  return <h1>Homepage</h1>
}

function ProductDetail(){
  return <h1>ProductDetail</h1>
}

function ProductDetailNotice(){
  return <h1>ProductDetailNotice</h1>
}

function Cart(){
  return <h1>Cart</h1>
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

function User(){
  return <h1>User</h1>
}

export default App;