import React from 'react'

const Header = () => {
    return (
        <header>
      <h1>Canciones Piolas App</h1>
      <form id="form">
        <input type="text" id="search" placeholder="Canción o Artista...." />
        <button>Buscar</button>
      </form>
    </header>
    )
}

export default Header
