import React from 'react'
import Canciones from '../canciones/Canciones'

const ArrayCanciones = [
    {
        id: 1,
      artist: {
        name : 'Queen'
      },
      title: 'love of my life',
    },
    {
        id: 2,
     artist: {
        name : 'Queen'
      },
      title: 'Bohemian Rhapsody',
    },
    {
        id: 3,
     artist: {
        name : 'Queen'
      },
      title: 'Radio Ga Ga',
    },
    {
        id: 4,
     artist: {
        name : 'Queen'
      },
      title: 'Another one bites the dust',
    },
    {
        id: 5,
     artist: {
        name : 'Queen'
      },
      title: 'Dont stop me now',
    },
    {
        id: 6,
     artist: {
        name : 'Queen'
      },
      title: 'i want to break free',
    },
    {
        id: 7,
     artist: {
        name : 'Queen'
      },
      title: 'under pressure',
    },
  ]
const Lista = () => {
    return (
       <ul className = "songs">
           {ArrayCanciones.map(song => 
             <Canciones song = {song}></Canciones>
                 
          )}
       </ul>
          
    )
}

export default Lista
