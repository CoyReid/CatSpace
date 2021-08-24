import PostContainer from "./PostContainer";
import FriendCard from "./FriendCard";
import { Segment, Grid, Column, Card } from "semantic-ui-react";

function Friends({usersData}) {
  
  const friendsObjs = usersData.slice(1, 4)

  return (
    <div className="ten wide column">
      <Segment>
      <h2> Friends </h2>
        <Card.Group itemsPerRow={3}>
          {friendsObjs.map((obj) => (
            <FriendCard key={obj.name} obj={obj}/>
          ))}
        </Card.Group>
      </Segment>
    </div>
  );
}

export default Friends;
