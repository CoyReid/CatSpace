import { Segment } from "semantic-ui-react";

function Settings({darkMode, setDarkMode}) {
  return (
    <div className="ten wide column">
      <h2> this is settings</h2>

      <Segment>
        <p> stuff goes here</p>

        <p> stuff goes here</p>

        <p> stuff goes here</p>
      </Segment>
      
      <Segment>
      <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
      </Segment>
    </div>
  );
}

export default Settings;
