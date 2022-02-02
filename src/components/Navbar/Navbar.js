import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import { FiSettings } from 'react-icons/fi';
import { AiOutlineHistory } from 'react-icons/ai';

function Navbar() {
    return (
        <nav className="navbar">
                <NavLink to="ytd/history"><AiOutlineHistory></AiOutlineHistory></NavLink>
                <NavLink to="ytd/settings"><FiSettings></FiSettings></NavLink>
        </nav>
    );
}

export default Navbar;