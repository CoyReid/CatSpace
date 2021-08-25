import { Segment, Form, Button } from "semantic-ui-react";
import { useState } from "react";

function Settings({darkMode, setDarkMode, usersData, updateSettings}) {
  
  const [formData, setFormData] = useState({
    displayname: usersData[0].displayname,
    description: usersData[0].description,
    image: usersData[0].image,
    coverpic: usersData[0].coverpic,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUserObj = {
      ...usersData[0],
      displayname: formData.displayname,
      description: formData.description,
      image: formData.image,
      coverpic: formData.coverpic,
    }
    fetch("http://localhost:8000/users/1", {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newUserObj)
    })
    .then(r => r.json())
    .then(updateSettings)
    setFormData({
      ...formData,
    });
    alert("Information was saved!")
  }
  
  return (
    <div className="ten wide column">
      <h2>Settings</h2>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Edit Profile Photo"
            placeholder="Enter URL here..."
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <Form.Input
            label="Edit Cover Photo"
            placeholder="Enter URL here..."
            name="coverpic"
            value={formData.coverpic}
            onChange={handleChange}
          />
          <Form.Input
            label="Edit Display Name"
            placeholder="Enter name here..."
            name="displayname"
            value={formData.displayname}
            onChange={handleChange}
          />
          <Form.Input
            label="Edit Description"
            placeholder="Enter text here..."
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <Button type="submit">Meow</Button>
        </Form>
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
