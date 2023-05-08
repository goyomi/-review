import Hello from './components/Hello'
import Time from './components/Time'
import Resume from './components/Resume';
import ColorText from './components/ColorText';

function HelloProps(props) {
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}

function App() {
  return (
    <div>
      <Hello name="Gary" />
      <Time />
      <HelloProps
        // 컴포넌트에 속성 넣는 방법 
        name="Jae"
        age={25}
        someFunc={() => 'awesome!!!'}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }} />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />
      <ColorText color="skyBlue" />
      <ColorText color="yellow" />
      <ColorText color="yellowGreen" />
      {/* 폰트 굵기는 어떻게 조절? */}
    </div>
  );
}

export default App;