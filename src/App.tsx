import { Outlet } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h3>
          NanoERP
        </h3>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
