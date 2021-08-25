import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <Menu vertical size="large" className="sideMenu">
      <div className="logoDiv">
        <img
          className="logo"
          src="https://i.ibb.co/zxn66LQ/catlogopurp.png"
          alt="a cat icon"
        />
        <h3 className="welcome">Welcome to CatSpace</h3>
      </div>

      <Menu.Item as={NavLink} to="/">
        Main Page
      </Menu.Item>
      <Menu.Item as={NavLink} to="/profile">
        Profile
      </Menu.Item>
      <Menu.Item as={NavLink} to="/friends">
        Friends
      </Menu.Item>
      <Menu.Item as={NavLink} to="/settings">
        Settings
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
