import React from 'react'

interface ActionsProp {
    timeToHit: number
    rocket: string
    status: string
}

export default function Action({rocket, timeToHit, status}: ActionsProp) {
  return (
    <tr>
        <td>{rocket}</td>
        <td>{timeToHit}</td>
        <td>{status}</td>
    </tr>
  )
}
