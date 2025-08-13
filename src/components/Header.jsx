import { Link } from 'react-router-dom'
import NavbarAPI from './NavbarAPI'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Sonccone
          </Link>
          <NavbarAPI />
        </div>
      </div>
    </header>
  )
}

export default Header
