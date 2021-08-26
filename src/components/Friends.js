import FriendCard from "./FriendCard";
import { Segment, Card, Button, Grid, Form } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Page from "./Page";
import { useState } from "react";

function Friends({usersData, handleLike, handleAddFriend, darkMode}) {
  
  const [formData, setFormData] = useState({
    name: "",
  });

  const friendsObjs = usersData.slice(1, usersData.length)

  function handleChange(e){
    setFormData({
      name: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    const newUserObj = {
      name: formData.name,
      displayname: formData.name,
      description: "New User",
      image: "https://i.pinimg.com/originals/ea/b8/60/eab860a9c45b720fbc527bd304e12a68.jpg",
      coverpic: "https://i.ibb.co/vshvDJn/friendcoverphoto.jpg",
      posts: [],
    }
    fetch("http://localhost:8000/users/", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newUserObj)
    })
    .then(r => r.json())
    .then(handleAddFriend)
    setFormData({
      ...formData,
      name: "",
    })
  }

  return (
    <div className="ten wide column">
      <Switch>
        <Route path="/friends/:id">
          <Page handleLike={handleLike} darkMode = {darkMode}/>
        </Route>
        <Route path="/friends">
          <Segment>
            <h2> Friends </h2>
            <Card.Group itemsPerRow={3}>
              {friendsObjs.map((obj) => (
                <FriendCard key={obj.id} obj={obj} usersData={usersData}/>
              ))}
            </Card.Group>
          </Segment>
          <Segment>
            <h2>Add Friends</h2>
            <Grid>
            <Grid.Column textAlign="center">
              <Form onSubmit={handleSubmit}>
                <Form.Input 
                  placeholder="Enter friend name..."
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Button color="violet" type="submit">Generate Feline Friend</Button>
              </Form>
            </Grid.Column>
          </Grid>
          </Segment>
        </Route>
      </Switch>
    </div>
  );
}

export default Friends;

