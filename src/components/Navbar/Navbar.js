import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="navbar">
                <NavLink to="yt-downloader-site/">Home</NavLink>
                <NavLink to="yt-downloader-site/history">History</NavLink>
                <NavLink to="yt-downloader-site/settings">Settings</NavLink>
        </nav>
    );
}

export default Navbar;