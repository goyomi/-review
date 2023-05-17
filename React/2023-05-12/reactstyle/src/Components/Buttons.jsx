import React from 'react'
import styled, { css } from 'styled-components'

const Common = css`
width: 100px;
height: 50px;
padding: 10px;
margin: 10px;
`
const One = css`
  border: 2px solid gray;
  background-color: powderBlue;
  box-shadow: 5px 0 5px black;
`

const Two = css`
  border-radius: 20px;
  background-color: lightPink;
  font-weight: bolder;
  box-shadow: 1px 1px 5px black;
`

const Three = css`
  border-radius: 30px;
  background-color: lightGreen;
  font-weight: bolder;
  box-shadow: 1px 1px 5px black;
`

const FontWhite = css`
  color: white;
`

const Hello = styled.button`
  ${Common}
  ${FontWhite}
  ${One}
  /* 여기 바로 코드 작성해도 관계없음 버튼 추가시키면서 css도 같이 */
`
const Iam = styled.button`
  ${Common}
  ${Two}
`
const Btn = styled.button`
  ${Common}
  ${FontWhite}
  ${Three}
`
export { Hello, Iam, Btn }

// 상속받아올 경우
// const Iam = styled.(button)`
//   ${Common}
//   ${Two}
// `

// Buttons.jsx 로해서 버튼 컴포넌트를 따로 만들어주는게 좋음 

// import React from 'react'
// import styled from 'styled-components';

// const Button = styled.button`
// background-color:royalblue;
// padding:10px;
// color:#fff;
// `;

// const ButtonStyle2 = styled(Button)`
// color:#000;
// border:none;
// border-radius: 10px;
// font-weight: bold;
// box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
// `;

// const ButtonStyle3 = styled(Button)`
// color:yellow;
// width: 100px;
// background-color: lightgreen;
// `;

// const ButtonStyle4 = styled(ButtonStyle2)`
// border-radius: 20px;
// color: #fff;
// background-color: hotpink;
// `;

// export { Button, ButtonStyle2, ButtonStyle3, ButtonStyle4 }