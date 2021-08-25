import PostContainer from "./PostContainer";
import PostForm from "./PostForm";
import ProfileCover from "./ProfileCover"
import { Segment } from "semantic-ui-react";
import SearchSort from "./SearchSort";
import { useState } from "react";

function MainPage({ usersData, handleLike, addPost }) {
  
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("All");

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
      <div className="ten wide column ">
      <ProfileCover profileData={usersData[0]}/>
        <Segment>
          <SearchSort search={search} onSearchChange={setSearch} onSortChange={setSortBy}/>
          <PostForm usersData={usersData} addPost={addPost}/>
          <PostContainer posts={searchedPosts} handleLike={handleLike}/>
        </Segment>
      </div>
    </>
  );
}

export default MainPage;
