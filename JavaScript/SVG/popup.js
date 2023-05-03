const article = document.querySelector('.popup')
const openBtn = document.querySelector('.btn-open')
const closeBtn = document.querySelector('.btn-close')
const dim = document.querySelector('.dim')


// 첫번째 포커스 요소 
const firstEl = article.querySelectorAll('a')
// console.log(firstEl)
// article의 a요소 가장첫번째꺼 찾아주고 끝냄 
// 모두 찾을려면 All 사용 

function openPopup() {
  // console.log('click!')
  article.classList.add("active")
  firstEl.focus();
}

function closePopup() {
  article.classList.remove("active")
}

openBtn.addEventListener('click', openPopup)
closeBtn.addEventListener('click', closePopup)
closeBtn.addEventListener('keydown', function (e) {
  console.log(e.key)
  if (!e.shiftKey && e.key === 'Tab') {
    console.log("ddd")
    e.preventDefault()
    firstEl.focus()
  } else if (e.shiftKey && e.key === "Tab") {
    console.log("shift + tab")
  }
})

firstEl.addEventListener("keydown", function (e) {
  if (e.shiftKey && e.key === "Tab") {
    e.preventDefault();
    closeBtn.focus();
  }
})

dim.addEventListener("click", closePopup)