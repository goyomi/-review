import MyList from "./components/MyList";
import ProductList from "./components/ProductList";
import Counter from "./components/Counter";

function Hello({ name }) {
  if (name) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  return <NoName />
}

function NoName() {
  return (
    <div>
      <h1>이름을 입력하지 않았습니다.</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Hello />
      <MyList />
      <ProductList />
      <Counter />
    </div>
  );
}
export default App;
