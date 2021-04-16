import React, { useState } from 'react'
import {
  useGetPokemonQuery,
  IPokemon,
  IPokemonType,
  useSavePokemonMutation,
  IPokemonInput,
} from '@mydemo/api'

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
  const [input, setInput] = useState<IPokemonInput>()
  const { data, loading } = useGetPokemonQuery()
  const [savePokemonMutation, status] = useSavePokemonMutation()

  const change = (id: string): React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> => (
    evt,
  ) => {
    setInput((x) => ({
      ...x,
      [id]: evt.target.value,
    }))
  }

  const add = () => {
    if (typeof input !== 'undefined') {
      void savePokemonMutation({
        variables: {
          pokemon: input,
        },
      })
    }
  }

  console.log(data, loading, status)

  return (
    <>
      <h2>The list</h2>
      {loading || status.loading ? (
        'loading'
      ) : (
        <>
          {(data?.entries || []).map((x) => (
            <Pokemon key={x?.id} data={x as IPokemon} />
          ))}
        </>
      )}

      <form onSubmit={(evt) => evt.preventDefault()}>
        <div>
          <label>
            Name
            <input type="text" id="name" onChange={change('name')} />
          </label>
        </div>
        <div>
          <label>
            Type
            <select name="type" onChange={change('type')}>
              {Object.keys(IPokemonType).map((k) => (
                <option key={k} value={k.toUpperCase()}>
                  {k}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="button" onClick={add}>
          add
        </button>
      </form>
      <p>My favorite type is {IPokemonType.Water}.</p>
    </>
  )
}
