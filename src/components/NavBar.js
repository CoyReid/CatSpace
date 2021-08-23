import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">Main Page</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </div>
    )
}

export default NavBar