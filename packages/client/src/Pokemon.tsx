import React from 'react'
import { IPokemon } from '@mydemo/api'

export const Pokemon: React.FC<{ data: IPokemon }> = ({ data }) => {
  return (
    <div>
      #{data.id}
      <ul>
        <li>Name: {data.name?.value?.toUpperCase()}</li>
        <li>Type: {data.type}</li>
      </ul>
    </div>
  )
}
