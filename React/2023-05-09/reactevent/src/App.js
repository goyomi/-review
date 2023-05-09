import { useState } from "react";
import Login from './Login'
import Homepage from './Homepage'
import Modal from "./Modal";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false)
  const [modalShow, setModalShow] = useState(true)

  function modalClose() {
    setModalShow(false)
  }

  console.log(login)
  return (
    <>
      {login ? <Homepage /> : <Login user={user} setLogin={setLogin} />}
      {modalShow && <Modal modalClose={modalClose}>
        <h2>사용약관에 대해 말씀드리겠습니다.</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aspernatur et temporibus eum quis ad. Sed explicabo, ullam non eum rerum numquam reprehenderit! Recusandae sit, ea possimus labore perferendis quibusdam.</p>
        <a href="#none">더보기</a>
      </Modal>}
    </>
  )
}

export default App;