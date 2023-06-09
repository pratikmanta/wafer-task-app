import logo from '../../assets/unsplash-logo.svg'
import hamburgerIcon from '../../assets/hamburger.svg'
import Search from './search'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="unsplash-logo" className="logo-img" />
      </div>
      <Search inputType='simple-search' />
      <div className="nav-btn-wrapper">
        <div className="btn-common">
          <button className="btn-text">Explore</button>
          <button className="btn-text">Advertise</button>
          <button className="btn-text">Unsplash +</button>
        </div>
        <div className="divider"></div>
        <div className="btn-common">
          <button className="btn-text">Log in</button>
        </div>
        <button className="btn-submit">Submit a photo</button>
        <button className="btn-hamburger">
          <img src={hamburgerIcon} alt='navigation'/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar