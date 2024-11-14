import React from 'react'
import { Navigate } from 'react-router-dom'

interface childrenProp {
    children: React.ReactNode
}

export default function LoginGuard({children}: childrenProp) {
    const isLogin = localStorage.getItem("Authorization")
    if (!isLogin) {
        console.log(55)
        alert("why are tou lying ????")
        return <Navigate to='/login' />
    }    
  return children
}
