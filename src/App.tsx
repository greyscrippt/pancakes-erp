import { Outlet } from "react-router-dom";
import "./styles.css";
import Typography from "@mui/material/Typography";

import NavbarLink from "./components/NavbarLink";

function App() {
  return (
    <div className="master-container">
      <nav className="navbar">
        <Typography variant="h4" sx={{ alignSelf: "center" }}>
          NanoERP
        </Typography>

        <ul className="navbar-links">
            <NavbarLink name="Dashboard" uri="/" />
            <NavbarLink name="Rooms" uri="/rooms" />
            <NavbarLink name="Users" uri="/users" />
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
