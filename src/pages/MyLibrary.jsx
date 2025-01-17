import React from 'react'
import GameCard from '../components/GameCard'
import './myLibrary.css'

function MyLibrary({games, reference}) {
  return (
    <>
        <section className="library" id="library" ref={reference}>
            <div className="container-fluid">
              <div className="row mb-3">
                <h1>My Library</h1>
              </div>
              <div className="row">
                {
                  games.length === 0 ? (
                    <h2>Your Library is Empty.</h2>
                  ) : (
                    games.map(game =><GameCard key={game._id} game={game}/>)
                  )
                }
              </div>
            </div>
        </section>
    </>
  )
}

export default MyLibrary