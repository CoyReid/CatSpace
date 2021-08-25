import { Segment } from "semantic-ui-react";
import PostContainer from "./PostContainer";
import ProfileCover from "./ProfileCover";

function Profile({ usersData, handleLike }) {
  
  const { posts } = usersData[0];

  posts.sort((a, b) => {
    let c = new Date(a.created);
    let d = new Date(b.created);
    return d - c;
  })
  
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
