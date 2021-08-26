import FriendCard from "./FriendCard";
import { Segment, Card, Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Page from "./Page";

function Friends({usersData, handleLike}) {
  
  const friendsObjs = usersData.slice(1, 4)

  return (
    <div className="ten wide column">
      <Switch>
        <Route path="/friends/:id">
          <Page handleLike={handleLike}/>
        </Route>
        <Route path="/friends">
          <Container>
          <Segment>
            <h2> Friends </h2>
            <Card.Group itemsPerRow={3}>
              {friendsObjs.map((obj) => (
                <FriendCard key={obj.id} obj={obj}/>
              ))}
            </Card.Group>
          </Segment>
          </Container>
        </Route>
      </Switch>
    </div>
  );
}

export default Friends;
