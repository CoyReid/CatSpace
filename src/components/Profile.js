import { Segment } from "semantic-ui-react";
import PostContainer from "./PostContainer";

function Profile({ usersData }) {
  
  const { posts } = usersData[0];
  
  return (
    <div className="ten wide column">
      <h2>Grumpy Cat</h2>
      <Segment>
        <p>This will be about section with back pic and stuff</p>
      </Segment>
      <Segment>
        <PostContainer posts={posts}/>
      </Segment>
    </div>
  );
}

export default Profile;
