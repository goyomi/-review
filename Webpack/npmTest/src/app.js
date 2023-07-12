import plus from "./plus";
import './style.css'
import rabbit from './images/rabbit.png'

// console.log(plus(2, 4));

// 돔 파싱이 완성되면 
document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `<img src="${rabbit}">`
})
