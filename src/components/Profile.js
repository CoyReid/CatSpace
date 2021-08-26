import { Segment, Grid, Button } from "semantic-ui-react";
import PostContainer from "./PostContainer";
import ProfileCover from "./ProfileCover";
import PostForm from "./PostForm";

function Profile( { usersData, handleLike, addPost , postShow, setPostShow} ) {
  
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
           <Grid>
            <Grid.Column textAlign="center">
              <Button className="formbtn" onClick={() => setPostShow(!postShow)}>{postShow? "Hide Post Form" : "Show Post Form"}</Button>
            </Grid.Column>
          </Grid>
          {postShow ? <PostForm usersData={usersData} addPost={addPost}/> : null}
        <PostContainer posts={posts} handleLike={handleLike}/>
      </Segment>
    </div>
  );
}

export default Profile;
