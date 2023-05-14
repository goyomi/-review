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

function Index(){
  return <h1>hello world0</h1>
}

function One(){
  return <h1>hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;