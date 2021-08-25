import PostContainer from "./PostContainer";
import PostForm from "./PostForm";
import ProfileCover from "./ProfileCover"
import { Segment } from "semantic-ui-react";

import SearchSortFilter from "./SearchSortFilter";

function MainPage({ usersData, handleLike }) {
  
  let mainPagePosts = [];
  usersData.forEach((obj) => {
    mainPagePosts.push(...(obj.posts.slice(0, 4)))
  })
  mainPagePosts.sort((a, b) => {
    let c = new Date(a.created);
    let d = new Date(b.created);
    return d - c;
  });

  return (
    <>
      <div className="ten wide column">
      <ProfileCover/>
        <Segment>
    
         
          <SearchSortFilter />
        
          <PostForm />
          <PostContainer posts={mainPagePosts} handleLike={handleLike}/>
        </Segment>
      </div>
    </>
  );
}

export default MainPage;
