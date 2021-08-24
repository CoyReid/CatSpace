import { NavLink } from "react-router-dom";
import { Menu, Segment } from 'semantic-ui-react'

function NavBar() {
    return (
   
          <Menu vertical size = 'large'>
            <Menu.Item color="red" as={ NavLink} to="/">Main Page.</Menu.Item>
            <Menu.Item as={NavLink} to="/profile">Profile</Menu.Item>
            <Menu.Item as={NavLink} to="Friends">Friends</Menu.Item>
            <Menu.Item as={NavLink} to="/settings">Settings</Menu.Item>
         </Menu>
        
  

    )
}

export default NavBar