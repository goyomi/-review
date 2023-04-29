import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents.js";

const colaGenerator = new ColaGenerator();
const vendingMachineEvents = new VendingMachineEvents();

// 탑레벨 await : 최상위 모듈에서 실행되는 await를 탑레벨이라고 붙여줌. 최상위 모듈에서는 await만 사용해도 문제가 없음 (최신문법)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
await colaGenerator.setup();
vendingMachineEvents.bindEvent();