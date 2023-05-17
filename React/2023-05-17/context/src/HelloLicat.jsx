import React from 'react'

export default function HelloLicat() {
  return (
    <UserInfo.Consumer>
      {(value)=> {
        <div>{value.}HelloLicat</div>

      }}
    </UserInfo.Consumer>
  )
}
