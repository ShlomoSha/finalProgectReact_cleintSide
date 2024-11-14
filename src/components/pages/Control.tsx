import { useRef, useState } from "react"
import { RootState, useAppSelector } from "../../redux/stor"
import Action from "./Action"

export default function Control() {
  const { user } =useAppSelector((state: RootState) => state.user)
  const [location, setLocation] = useState('North')
  const selectRef = useRef<HTMLSelectElement>(null)
  return (
    <div className="control">
        <h2>Organization: {user!.organization}</h2>
        <h4>you'r available ammo</h4>
      <div className="attact">
        <>
          {user!.ammo.map(a => <p>{a.name} × {a.amount} {user!.organization != 'IDF' && <button>Sender</button>}</p>)}
        </>  
          {user?.organization != 'IDF'&& (
        <div className="ChoseLocation">
          <p>Chose location to hit</p>
          <select ref={selectRef} value={location} onChange={(e) => setLocation(e.target.value)} >      
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="Center">Center</option>
            <option value="West Bank">West Bank</option>
          </select>
        </div>
        )}
      </div>
      <p></p>
      <table>
        <tr>
          <th>Rocket</th>
          <th>Timo To Hit</th>
          <th>Status</th>
        </tr>
        {user?.action?.map(a => <Action key={a.id} rocket={a.rocket} timeToHit={0} status={a.status} />)}
      </table>
    </div>
  )
}
