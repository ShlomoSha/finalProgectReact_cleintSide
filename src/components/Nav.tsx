import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
        <NavLink to={'/control'}>Control</NavLink>
    </div>
  )
}
