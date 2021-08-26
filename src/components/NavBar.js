import { NavLink } from "react-router-dom";
import { Grid, Menu, Icon } from "semantic-ui-react";

function NavBar({ darkMode }) {

  return (
    <Grid.Column width={3} >
      <Menu
        fixed="left"
        vertical
        size="large"
        className={`sidemenu ${darkMode ? "inverted" : ""}`}
        id="sidemenu"
      >
        <div className="logoDiv">
          <img
            className="logo"
            src="https://i.ibb.co/zxn66LQ/catlogopurp.png"
            alt="a cat icon"
          />
          <h3 className="welcome">Welcome to CatSpace</h3>
        </div>

        <Menu.Item as={NavLink} to="/" exact={true} className="menuItems">
            <Icon name="home" className="menuIcons"/>
            Main Page
        </Menu.Item>
        <Menu.Item as={NavLink} to="/profile" className="menuItems">
        <Icon name="user" className="menuIcons"/>
          Profile
        </Menu.Item>
        <Menu.Item as={NavLink} to="/friends" className="menuItems">
        <Icon name="users" className="menuIcons"/>
          Friends
        </Menu.Item>
        <Menu.Item as={NavLink} to="/settings" className="menuItems">
        <Icon name="settings" className="menuIcons"/>
          Settings
        </Menu.Item>
      </Menu>
    </Grid.Column>
  );
}

export default NavBar;
