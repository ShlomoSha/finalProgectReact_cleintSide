import Nav from './components/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/auths/Login'
import Register from './components/auths/Register'
import Control from './components/pages/Control'
import LoginGuard from './components/guard/LoginGaurd'

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='control' element={
          <LoginGuard>
            <Control/>
          </LoginGuard>
        } />
        <Route path='/' element={<Navigate to={'login'}/>} />
      </Routes>
    </div>
  )
}
