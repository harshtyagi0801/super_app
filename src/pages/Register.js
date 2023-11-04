import React from 'react'
import SignUpform from '../component/register/SignUpform'
import Cover from '../component/register/Cover'

function Register() {
  return (
    <div style={{display: 'grid' , gridTemplateColumns: '52% 48% ',height:'100vh'}}>
    <Cover/>
    <SignUpform/>
    </div>
  )
}

export default Register