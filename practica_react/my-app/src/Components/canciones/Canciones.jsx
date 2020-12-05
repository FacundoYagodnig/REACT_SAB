import React from 'react'

const Canciones = ({song}) => {
    return (
        <li>
              <span><strong>{song.artist.name}</strong> - {song.title} </span>
              <button class="btn">
                  Letra
              </button>
          </li>
    
    )
}


export default Canciones
