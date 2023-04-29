// ## 2. 동기 VS 비동기

// - 일상에서 마주치는 동기와 비동기
// 1. 마트에서 물건을 구입할 때 계산대에서 손님들이 물건을 계산하러 줄을 섭니다.
// 2. 첫 손님이 지갑을 찾느라 잠시 계산을 못하는 상황이 발생합니다.
// 3. 이때 점원이 손님이 지갑을 찾고 돈을 꺼낼 때 까지 가만히 기다리고 있다면 동기적 처리,
// 4. 기다리면서 동시에 비어있는 옆 계산대로 이동해 첫 손님이 지갑을 찾을 동안 잠시 다음 손님의 계산을 먼저 처리한다면 비동기적 처리라고 볼 수 있습니다.

// 자바스크립트 코드는 기본적으로 순서대로(동기적으로) 실행됩니다.
console.log(1);
console.log(2);
[3, 4, 5].forEach(i => console.log(i));
console.log(6);


console.log(1);
// setTimeout으로 콜백함수가 일정시간 뒤에 실행하도록 코드를 작성합니다. 순서대로 실행되지 않습니다.(비동기적으로 실행). 이러한 비동기 실행 코드는 setInterval, addEventListener 와 같은 함수들이 있습니다.
setTimeout(() => console.log(2), 100);
[3, 4, 5].forEach(i => console.log(i));
console.log(6);
// 1, 3, 4, 5, 6, 2



// XMLHttpRequest : XML을 Http로 요청한다
// 줄여서 XHR

// XHR 객체를 생성합니다. new 붙이면 생성자 함수생성 
const requestObj = new XMLHttpRequest();
requestObj.open('GET', 'url'); // 요청을 초기화합니다. 통신방법과 요청을 발신할 대상의 주소를 전달합니다.
// get방식으로 보내면 url에 보내는 데이터가 표시됨. 양도 제한적
// get과 post 둘 중 하나를 선택할 수 있음 
requestObj.onreadystatechange = () => { // readystate 가 변화하면 실행되는 이벤트리스너 입니다.
  // readystate : 요청을 보내는 클라이언트의 상태를 의미합니다.
  // readystate의 종류
  // 0 (UNSENT) - XHR 객체가 생성되었지만 아직 초기화되지 않았습니다.
  // 1 (OPENED) - open()함수가 호출되어 요청이 초기화되었습니다.
  // 2 (HEADERS_RECEIVED) - send()함수가 호출되었습니다.
  // 3 (LOADING) - 데이터를 다운받는 중 입니다.
  // 4 (DONE) - 통신이 완료되었습니다.
  if (requestObj.readyState == 4 && requestObj.status == "200") {

    const result = requestObj.responseText;

  }
};
requestObj.send(); // 서버로 요청을 보냅니다. send 메소드가 실행되어야만 우리가 위에서 설정한 내용들이 의미를 가지게 됩니다.