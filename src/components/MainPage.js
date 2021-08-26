import PostContainer from "./PostContainer";
import PostForm from "./PostForm";
import ProfileCover from "./ProfileCover"
import { Segment, Button, Grid } from "semantic-ui-react";
import SearchSort from "./SearchSort";
import { useState } from "react";

function MainPage({ usersData, handleLike, addPost , postShow, setPostShow}) {
  
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("all");

  let mainPagePosts = [];
  usersData.forEach((obj) => {
    mainPagePosts.push(...(obj.posts))
  })

  const searchedPosts = mainPagePosts
  .filter((post) => post.name.toLowerCase().includes(search.toLowerCase()))
  .sort((a, b) => {
    if (sortBy === "all" || sortBy === "postsdesc") {
      let c = new Date(a.created);
      let d = new Date(b.created);
      return d - c;
    } else if (sortBy === "mostlikes") {
      return b.likes - a.likes
    } else if (sortBy === "leastlikes") {
      return a.likes - b.likes
    } else if (sortBy === "postsasc") {
      let c = new Date(a.created);
      let d = new Date(b.created);
      return c - d;
    }
    return 0;
  });

  return (
    <>
      {/* <div className="ten wide column "> */}
      <Grid.Column width={10}>
      <ProfileCover profileData={usersData[0]}/>
        <Segment>
          <SearchSort search={search} onSearchChange={setSearch} onSortChange={setSortBy}/>
          <Grid>
            <Grid.Column textAlign="center">
              <Button color="blue" onClick={() => setPostShow(!postShow)}>{postShow? "Hide Post Form" : "Write Something!"}</Button>
            </Grid.Column>
          </Grid>
          {postShow ? <PostForm usersData={usersData} addPost={addPost}/> : null}
          <PostContainer posts={searchedPosts} handleLike={handleLike}/>
        </Segment>
        </Grid.Column>
      {/* </div> */}
    </>
  );
}

export default MainPage;
