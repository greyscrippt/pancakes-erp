import { Outlet } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <nav className="navbar">
        <Typography variant="h4" sx={{ alignSelf: "center" }}>
          NanoERP
        </Typography>

        <ul className="navbar-links">
          <li>
            <Link className="navbar-link" to="/">
              <Button variant="contained">
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/rooms">
              <Button variant="contained">
                Rooms
              </Button>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
