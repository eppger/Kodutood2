import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div className="menu">
              <Link to="/">
          <button>Avalehele</button>
        </Link>
        <Link to="/uudised">
          <button>Uudiste lehele</button>
        </Link>
        <Link to="/meist">
          <button>Info meist</button>
        </Link>
        <Link to="/kontakt">
          <button>Võta meiega ühendust</button>
        </Link>
        <Link to="/seaded">
          <button>Seaded</button>
        </Link>
        
    </div>
  )
}

export default Menu