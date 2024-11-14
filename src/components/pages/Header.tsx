import React from 'react'
import { Weapon } from '../../types/user.interface'

interface HeaderProps {
    organization: string
    ammo: Weapon[]
}

export default function Header({organization, ammo}: HeaderProps) {
  return (
    <div className='header'>
        <h2>Organization: {organization}</h2>
        {ammo.map(a => <p>{a.name} × {a.amount}</p>)}
    </div>
  )
}
