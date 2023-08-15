import React from 'react'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src="./images/kasa-logo.png" alt="Logo représentant l'application web de location immobilière Kasa"/>
        </div>
        <div className='navbar__links'>
            <a href='#' className='navbar__links__accueil'>Accueil</a>
            <a href='#' className='navbar__links__apropos'>A propos</a>
        </div>
    </nav>
  )
}

export default Navbar