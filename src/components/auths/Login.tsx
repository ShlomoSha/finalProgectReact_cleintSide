import { useEffect, useState } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/stor'
import { fetchLogin } from '../../redux/userSlice'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state: RootState) => state.user)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (!user?._id) return
    navigate('/control')
  }, [user])

  const handleLogin = () => {
    dispatch(fetchLogin({username, password}))
  }

  return (
    <div className='login'>
      <input type="text" placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>no account yet? <NavLink to={'/register'}>join us</NavLink></p>
    </div>
  )
}
