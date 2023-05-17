import React from 'react'
import HelloLicat from './HelloLicat'


function Appconsumer() {
  return (
    <UserInfo.provider>
      <HelloLicat />
    </UserInfo.provider>
  )
}

export { UserInfo, Appconsumer}