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

        <Link to="/valikud">
          <button>Valik</button>
        </Link>

        <Link to="/books">
          <button>Books</button>
        </Link>

        <Link to="/numbrid">
          <button>Numbrid</button>
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
        <Link to="/lisa-uudis">
          <button>Lisa uudis</button>
        </Link>

        <Link to="/halda">
          <button>Halda uudiseid</button>
        </Link>
        
        <Link to="/logimine">
          <button>Logimine</button>
        </Link>
        
    </div>
  )
}

export default Menu