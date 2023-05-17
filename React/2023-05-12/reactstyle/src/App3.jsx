import React from "react";
import styled from "styled-components";
import Hello from "./Components/Hello";

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: red;
`;


const App = () => {
  return (
    <ContentDiv>
      <ContentH2>Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
      <Hello />
    </ContentDiv>
    // class명을 지정한 적은 없지만 알아서 랜덤 난수로 처리해줌
  );
};

export default App;