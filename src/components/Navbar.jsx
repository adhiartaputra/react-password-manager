import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMenu = (props) => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link id="link" className="nav-link" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link id="link" className="nav-link" to={'/form'}>Add Password</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavbarMenu;