import { useRef, useState } from "react"
import { RootState, useAppSelector } from "../../redux/stor"
import Header from "./Header"

export default function Control() {
  const { user } =useAppSelector((state: RootState) => state.user)
  const [location, setLocation] = useState('North')
  const selectRef = useRef<HTMLSelectElement>(null)
  return (
    <div>
      <Header organization={user!.organization} ammo={user!.ammo} />
      {user?.organization != 'IDF'&& (
        <>
          <p>Chose location to hit</p>
          <select ref={selectRef} value={location} onChange={(e) => setLocation(e.target.value)} >      
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="Center">Center</option>
            <option value="West Bank">West Bank</option>
          </select>
        </>
      )}
    </div>
  )
}
