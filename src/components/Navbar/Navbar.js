import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import { FiSettings } from 'react-icons/fi';
import { AiOutlineHistory, AiOutlineHome } from 'react-icons/ai';

function Navbar() {
    return (
        <nav className="navbar">
                <NavLink to="yt-downloader-site/history"><AiOutlineHistory></AiOutlineHistory></NavLink>
                <NavLink to="yt-downloader-site/settings"><FiSettings></FiSettings></NavLink>
        </nav>
    );
}

export default Navbar;