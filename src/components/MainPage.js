import PostContainer from "./PostContainer";
import PostForm from "./PostForm";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { Segment, Grid, Column } from "semantic-ui-react";

import SearchSortFilter from "./SearchSortFilter";

function MainPage({ usersData }) {
  
  const threeGrumpy = usersData[0].posts.slice(0, 3);
  const threeGarf = usersData[1].posts.slice(0, 3);
  const threeTom = usersData[2].posts.slice(0, 3);
  const threeBoots = usersData[3].posts.slice(0, 3);
  const mainPagePosts = [...threeGrumpy, ...threeGarf, ...threeTom,...threeBoots,].sort((a, b) => {
    let c = new Date(a.created);
    let d = new Date(b.created);
    return d - c;
  });

  return (
    <>
      <div className="ten wide column">
        <Segment>
          <h2>Welcome to CatSpace</h2>
          <SearchSortFilter />
        
          <PostForm />
          <PostContainer posts={mainPagePosts} />
        </Segment>
      </div>
    </>
  );
}

export default MainPage;
