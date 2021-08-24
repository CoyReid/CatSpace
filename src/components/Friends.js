import PostContainer from "./PostContainer";
import FriendCard from "./FriendCard";
import { Segment, Grid, Column, Card } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Page from "./Page";

function Friends({usersData}) {
  
  const friendsObjs = usersData.slice(1, 4)

  return (
    <div className="ten wide column">
      <Switch>
        <Route path="/friends/:id">
          <Page />
        </Route>
        <Route path="/friends">
          <Segment>
            <h2> Friends </h2>
            <Card.Group itemsPerRow={3}>
              {friendsObjs.map((obj) => (
                <FriendCard key={obj.id} obj={obj}/>
              ))}
            </Card.Group>
          </Segment>
        </Route>
      </Switch>
    </div>
  );
}

export default Friends;
