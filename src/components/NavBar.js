import { NavLink } from "react-router-dom";
import { Menu, Segment } from 'semantic-ui-react'

function NavBar() {
    return (
   
          <Menu vertical size = 'large'>
                  <h2>Welcome to CatSpace</h2>
            <Menu.Item color="red" as={ NavLink} to="/">Main Page.</Menu.Item>
            <Menu.Item as={NavLink} to="/profile">Profile</Menu.Item>
            <Menu.Item as={NavLink} to="/friends">Friends</Menu.Item>
            <Menu.Item as={NavLink} to="/settings">Settings</Menu.Item>
         </Menu>
        
  

    )
}

export default NavBar