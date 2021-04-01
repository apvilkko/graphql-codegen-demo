import React from 'react'
import { useGetPokemonQuery, IPokemon } from '@mydemo/api'

const Pokemon: React.FC<{ data: IPokemon }> = ({ data }) => {
  return (
    <div>
      #{data.id}
      <ul>
        <li>Name: {data.name}</li>
        <li>Type: {data.type}</li>
      </ul>
    </div>
  )
}

export const Main: React.FC<Record<string, unknown>> = () => {
  const { data, loading } = useGetPokemonQuery()

  return loading ? (
    'loading'
  ) : (
    <>
      {(data?.entries || []).map((x) => (
        <Pokemon key={x?.id} data={x!} />
      ))}
    </>
  )
}
