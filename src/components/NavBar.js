import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

function NavBar() {
    return (
        <div>
          <Menu vertical>
            <Menu.Item as={ NavLink} to="/">Main Page.</Menu.Item>
            <Menu.Item as={NavLink} to="/profile">Profile</Menu.Item>
            <Menu.Item as={NavLink} to="Friends">Friends</Menu.Item>
            <Menu.Item as={NavLink} to="/settings">Settings</Menu.Item>
         </Menu>
        </div>
    )
}

export default NavBar