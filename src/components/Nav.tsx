import { NavLink, useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch, useAppSelector } from '../redux/stor';
import userSlice from '../redux/userSlice';

export default function Nav() {
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(userSlice.actions.logout());
    localStorage.removeItem("Authorization");
    navigate('/login')
  }

  return (
    <div className='nav'>
      {!user.user ? (
        <>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/register'}>Register</NavLink>
        </>
        ) : (
          <button onClick={handleLogOut}>Log out</button>
        )}
        
    </div>
  )
}
