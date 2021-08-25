import { Segment } from "semantic-ui-react";
import PostContainer from "./PostContainer";
import ProfileCover from "./ProfileCover";

function Profile({ usersData, handleLike }) {
  
  const { posts } = usersData[0];
  
  return (
    <div className="ten wide column">
      <ProfileCover profileData={usersData[0]}/>
      <Segment>
        <PostContainer posts={posts} handleLike={handleLike}/>
      </Segment>
    </div>
  );
}

export default Profile;
