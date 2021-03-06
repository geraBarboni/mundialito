import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MundialContext } from '../context/mundialContext'

const Users = () => {
  const { players } = useContext(MundialContext)
  const { setPlayers } = useContext(MundialContext)
  const { handlePlayersName } = useContext(MundialContext)
  const { shufflePlayers } = useContext(MundialContext)

  return (
    <div className="">
      <div className="p-4">
        <h2 className="text-2xl font-medium">Ingrese los usuarios</h2>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {players.map((p) => (
            <div key={p.id} className="flex m-1">
              <div className="h-10 w-12 border-2 border-yellow-300 rounded-full flex m-1 text-center">
                <span className="m-auto">{p.id}</span>
              </div>
              <input
                onChange={(e) => {
                  handlePlayersName(p.id, e.target.value)
                }}
                type="text"
                name={p.id}
                className="border-2 border-gray-400 rounded h-8 w-full m-auto mx-2 px-2"
                placeholder={p.player}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-2">
        <Link to={'/gc'} onClick={() => shufflePlayers(players)}>
          <button
            className="bg-yellow-200
            p-2 
            w-full
            rounded border-2 border-yellow-300 h-auto 
          disabled:bg-slate-200 disabled:border-green-200
            hover:bg-yellow-300
          "
          >
            Comenzar mundial
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Users
