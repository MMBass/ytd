import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="history">History</NavLink>
                <NavLink to="settings">Settings</NavLink>
        </nav>
    );
}

export default Navbar;