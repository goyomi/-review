import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/modal";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false)

  function modalClose() {
    setModalShow(false)
  }

  function modalOpen() {
    setModalShow(true)
  }

  return (
    <div id="app">
      <Header />
      <Main modalOpen={modalOpen} />
      {/* props이름 = {전달될 값} */}
      <Footer />
      {modalShow && <Modal modalClose={modalClose} />}
    </div>
  );
}
export default App;
