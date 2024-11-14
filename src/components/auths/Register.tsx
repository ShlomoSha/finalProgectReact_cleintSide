import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [organization, setOrganization] = useState('IDF')
  const [location, setLocation] = useState('North')

  const navigate = useNavigate()

  const selectRef = useRef<HTMLSelectElement>(null)

  const clearAll = (): void => {
    setUserName('')
    setPassword('')
    setOrganization('IDF')
    setLocation('North')
  }

  useEffect(() => {
    organization == 'IDF' ? selectRef.current!.style.display = 'inline' : selectRef.current!.style.display = 'none'
  },[organization])

  const handleClick = async () => {
    try {
      if (!username || !password) throw new Error('You missing somthing')
      organization != 'IDF' && setLocation('')
      const newUser = {username, password, organization, location}
      console.log(newUser)
      const res = await fetch('http://localhost:3400/api/users/register', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
      const data = await res.json()
      navigate('/login')
    } catch (err) {
      alert(err)
      clearAll()
    }
  }

  return (
    <div className='register'>
      <input type="text" placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>
        <p>Chose organization</p>
        <select value={organization} onChange={(e) => setOrganization(e.target.value)}>
          <option value="IDF">IDF</option>
          <option value="Hezbollah">Hezbollah</option>
          <option value="Hamas">Hamas</option>
          <option value="IRGC">IRGC</option>
          <option value="Houthis">Houthis</option>
        </select>
      </label>

        <select ref={selectRef} value={location} onChange={(e) => setLocation(e.target.value)} >      
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="Center">Center</option>
          <option value="West Bank">West Bank</option>
        </select>

        <button onClick={handleClick}>Register</button>
    </div>
  )
}
