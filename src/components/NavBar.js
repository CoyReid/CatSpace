import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <Menu vertical size="large" className="sideMenu">
      <h2 className="welcome">Welcome to CatSpace</h2>
      <img className="logo" src="https://www.pngitem.com/pimgs/m/15-152712_cat-kitten-clip-art-cat-icon-transparent-background.png" alt="a cat icon"/>
      <Menu.Item as={NavLink} to="/">Main Page</Menu.Item>
      <Menu.Item as={NavLink} to="/profile">Profile</Menu.Item>
      <Menu.Item as={NavLink} to="/friends">Friends</Menu.Item>
      <Menu.Item as={NavLink} to="/settings">Settings</Menu.Item>
    </Menu>
  );
}

export default NavBar;
