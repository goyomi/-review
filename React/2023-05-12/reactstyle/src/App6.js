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

export default function App6() {
  return (
    <div>
      <Hello type='button'>안녕 ✋</Hello>
      <Iam type='button'>나는 🐰</Iam>
      <Btn type='button'>버튼이야 ✅</Btn>
    </div>
  )
}

// Buttons.jsx 로해서 버튼 컴포넌트를 따로 만들어주는게 좋음 
