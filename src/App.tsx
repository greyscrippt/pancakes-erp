import { Outlet } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h3>
          NanoERP
        </h3>

        <ul className="navbar-links">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
